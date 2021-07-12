import { configureStore } from '@reduxjs/toolkit';

import rootReducer from '../reducers';

export interface IExtraArgument {
  something: string;
}

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          something: 'hello'
        }
      }
    }),
  devTools: true
});
