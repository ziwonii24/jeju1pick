import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface IArea {
  name: string;
  address: string;
  rating: number;
}

interface IAreaState {
  areaList: IArea[];
  apiState: 'error' | 'loading' | 'success' | null;
  errorMessage?: string;
}

const initialState: IAreaState = {
  areaList: [],
  apiState: null
};

// export const getAreaList = createAsyncThunk('getAreaList', async () => {
//   return await getContactsApi();
// });

const areaSlice = createSlice({
  name: 'counter_toolkit',
  initialState,
  reducers: {
    clear: (state) => {
      state.areaList = [];
      state.apiState = null;
      state.errorMessage = undefined;
    },
    addWony: (state) => {
      state.areaList = [
        ...state.areaList,
        { name: '제주공항', address: '제주시', rating: 3.5 }
      ];
    }
  }
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getContacts.pending, (state) => {
  //       console.log('pemnding');
  //       state.apiState = 'loading';
  //       state.errorMessage = undefined;
  //     })
  //     .addCase(getContacts.fulfilled, (state, action) => {
  //       const contacts = action.payload as IArea[];
  //       if (!contacts) {
  //         state.contacts = [...contacts];
  //       } else {
  //         state.contacts = [...contacts].map((c) => {
  //           if (!c.address) {
  //             c.address = '주소 미입력';
  //           }
  //           if (!c.phone) {
  //             c.phone = '전화번호 미입력';
  //           }
  //           return c;
  //         });
  //       }
  //     })
  //     .addCase(getContacts.rejected, (state, action) => {
  //       console.log(action);
  //       if (action.error.message === 'unauthorized error') {
  //         // extraArguments.history.push('/login');
  //         return;
  //       }
  //       state.areaList = [];
  //       state.apiState = 'error';
  //       state.errorMessage = action.error.message;
  //     });
  // }
});

export default areaSlice;
