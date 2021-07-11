import { useDispatch } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { Action, combineReducers } from 'redux';

import { IExtraArgument } from '../store';

import areaSlice from './areaSlice';

const rootReducer = combineReducers({
  area: areaSlice.reducer
});

type RootState = ReturnType<typeof rootReducer>;
const useAppDispatch = () =>
  useDispatch<ThunkDispatch<RootState, IExtraArgument, Action>>();

export { RootState, useAppDispatch };
export default rootReducer;
