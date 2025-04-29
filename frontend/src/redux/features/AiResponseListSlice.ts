import { createSlice } from '@reduxjs/toolkit';

export interface AiResponseListState {
  loading: boolean;
  AiResponseList: {
    id: string;
    model: string;
    response: { response: string };
  }[];
}

const initialState: AiResponseListState = {
  loading: false,
  AiResponseList: [],
};

export const AiResponseList = createSlice({
  name: 'AiResponseList',
  initialState,
  reducers: {
    AI_RESPONSE_LIST_REQUEST(state) {
      state.loading = true;
    },
    AI_RESPONSE_LIST_SUCCESS(state, action) {
      state.loading = false;
      state.AiResponseList = action.payload;
    },
    AI_RESPONSE_LIST_FAILURE(state, action) {
      state.loading = false;
      state.AiResponseList = action.payload;
    },
    AI_RESPONSE_LIST_RESET(state) {
      state.loading = false;
      state.AiResponseList = [];
    },
  },
});

export const AiResponseListAction = AiResponseList.actions;
export default AiResponseList.reducer;
