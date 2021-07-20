import axios from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';

import { ParamType, ResType } from 'src/types/JejuSearch';

import { RootState } from '..';
import { jejuSearchSliceAction } from './reducer';

const axiosCall = async (param: ParamType) => {
  const params = {
    apiKey: '', // TODO: env 연결해야 정상동작함
    locale: 'kr',
    page: param.page,
    cid: param.cid
  };
  const res = await axios.get<ResType>(
    'https://api.visitjeju.net/vsjApi/contents/searchList',
    {
      params
    }
  );
  return res.data.items;
};

function* handleChangeParam() {
  const { getSuccess, getError } = jejuSearchSliceAction;
  try {
    const param = yield select(
      (state: RootState) => state.jejuSearch.parameter
    );
    const itemList = yield call(axiosCall, param);
    yield put(getSuccess(itemList));
  } catch (e) {
    yield put(getError(e.message));
  }
}

export function* watchJejuSearch() {
  const { changeParam, clearParam } = jejuSearchSliceAction;
  yield takeLatest(changeParam, handleChangeParam);
  yield takeLatest(clearParam, handleChangeParam);
}
