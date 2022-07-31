import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type HistoryState = {
  history: string[];
};

const initialState: HistoryState = {
  history: [],
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addHistory(state, { payload }: PayloadAction<string>) {
      state.history.push(payload);
    },
    clearHistory(state) {
      state.history = [];
    },
  },
});

export const { addHistory, clearHistory } = historySlice.actions;

export default historySlice.reducer;
