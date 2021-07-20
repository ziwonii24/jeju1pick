import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ItemType, ParamType } from 'src/types/JejuSearch';

interface IInitialState {
  parameter: ParamType;
  itemList: ItemType[];
  error?: string;
  loading: boolean;
}

const name = 'jeju-search';

const initialState: IInitialState = {
  parameter: { page: 1 },
  itemList: [],
  loading: false
};

const reducers = {
  clearParam: (state) => {
    state.parameter = initialState.parameter;
  },
  changeParam: (state, action: PayloadAction<ParamType>) => {
    state.parameter = action.payload;
    state.itemList = [];
    state.error = '';
    state.loading = true;
  },
  getSuccess: (state, action: PayloadAction<ItemType[]>) => {
    state.itemList = action.payload;
    state.error = '';
    state.loading = false;
  },
  getError: (state, action: PayloadAction<string>) => {
    state.itemList = [];
    state.error = action.payload;
    state.loading = false;
  }
};

const jejuSearchSlice = createSlice({ name, initialState, reducers });

export const jejuSearchSliceAction = jejuSearchSlice.actions;
export default jejuSearchSlice.reducer;
