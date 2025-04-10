import { configureStore } from '@reduxjs/toolkit';
import selectedAiListReducer from './features/selectedAiListSlice'; //   selectedAiListState,
import AiResponseListReducer from './features/AiResponseListSlice';

export const store = configureStore({
  reducer: {
    selectedAiList: selectedAiListReducer,
    AiResponseList: AiResponseListReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
