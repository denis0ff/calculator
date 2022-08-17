import { createSlice } from '@reduxjs/toolkit';
import { themes } from '@constants';
import { darkTheme, lightTheme } from '@theme';

const initialState = {
  theme: themes.light,
  config: lightTheme,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, { payload }) {
      switch (payload) {
        case themes.dark: {
          state.theme = payload;
          state.config = darkTheme;
          break;
        }
        case themes.light: {
          state.theme = payload;
          state.config = lightTheme;
          break;
        }
      }
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
