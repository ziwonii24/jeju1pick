import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import rootReducer from '../reducers';
import { watchJejuSearch } from 'src/reducers/jejuSearch/saga';

export interface IExtraArgument {
  something: string;
}

const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
  yield all([watchJejuSearch()]);
}

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([sagaMiddleware]),
  devTools: true
});

sagaMiddleware.run(rootSaga);
