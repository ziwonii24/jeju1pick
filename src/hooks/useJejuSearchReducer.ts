import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'src/reducers';
import { jejuSearchSliceAction } from 'src/reducers/jejuSearch/reducer';
import { ParamType } from 'src/types/JejuSearch';

const useJejuSearchReducer = () => {
  const dispatch = useDispatch();
  const { changeParam, clearParam } = jejuSearchSliceAction;
  const { parameter, itemList, error, loading } = useSelector(
    (state: RootState) => state.jejuSearch
  );
  const clearItemParam = useCallback(() => {
    dispatch(clearParam());
  }, [dispatch]);
  const changeItemParam = useCallback(
    (param: ParamType) => {
      dispatch(changeParam(param));
    },
    [dispatch]
  );
  const changePage = useCallback(
    (page: number) => {
      changeItemParam({ ...parameter, page });
    },
    [changeItemParam, parameter]
  );
  // const changeQuery = useCallback(
  //   (query: string) => {
  //     changeItemParam({ ...parameter, query });
  //   },
  //   [changeItemParam, parameter]
  // );
  return {
    parameter,
    itemList,
    error,
    loading,
    clearItemParam,
    changeItemParam,
    changePage
    // changeQuery
  };
};

export default useJejuSearchReducer;
