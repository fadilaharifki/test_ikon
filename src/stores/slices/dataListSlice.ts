import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DataInterface} from '../../interface/ListInterface';

interface DataListState {
  data: DataInterface[];
  isLoading: boolean;
  error: string | null;
}

const initialState: DataListState = {
  data: [],
  isLoading: false,
  error: null,
};

const dataListSlice = createSlice({
  name: 'datalist',
  initialState,
  reducers: {
    fetchDataList(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchDataListSuccess(state, action: PayloadAction<DataInterface[]>) {
      state.isLoading = false;
      if (state.data.length > 0) {
        state.data = [...state.data, ...action.payload];
      } else {
        state.data = action.payload;
      }
    },
    fetchDataListFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearDataList(state) {
      state.data = [];
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const {
  fetchDataList,
  fetchDataListSuccess,
  fetchDataListFailure,
  clearDataList,
} = dataListSlice.actions;

export default dataListSlice.reducer;
