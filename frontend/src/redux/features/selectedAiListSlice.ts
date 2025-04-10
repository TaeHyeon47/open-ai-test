import { createSlice } from '@reduxjs/toolkit';

export interface selectedAiListState {
  loading: boolean;
  selectedAiList: {
    id: string;
    name: string;
    description: string;
    icon: string;
    model: string;
  }[];
}

const initialState: selectedAiListState = {
  loading: false,
  selectedAiList: [],
};

export const selectedAiList = createSlice({
  name: 'selectedAiList',
  initialState,
  reducers: {
    SELECTED_AI_LIST_REQUEST(state) {
      state.loading = true;
    },
    SELECTED_AI_LIST_SUCCESS(state, action) {
      state.loading = false;
      state.selectedAiList = action.payload;
    },
    SELECTED_AI_LIST_FAILURE(state, action) {
      state.loading = false;
      state.selectedAiList = action.payload;
    },
  },
});

export const selectedAiListAction = selectedAiList.actions;
export default selectedAiList.reducer;
