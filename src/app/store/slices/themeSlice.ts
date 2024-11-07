import { createSlice } from '@reduxjs/toolkit';

import { KEY_THEME } from 'shared/constans/localStorageKeys';

type TThemeSlice = {
  theme: string;
};

const getTheme = () => {
  const theme = localStorage.getItem(KEY_THEME);

  if (theme && ['light', 'dark'].includes(theme)) {
    return theme;
  }

  const userMedia = window.matchMedia('(prefers-color-scheme: dark)');

  if (userMedia.matches) {
    return 'dark';
  }

  return 'light';
};

const initialState: TThemeSlice = {
  theme: getTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toogleTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const { toogleTheme } = themeSlice.actions;
export default themeSlice.reducer;
