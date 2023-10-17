import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { THEME } from '../../resources/enums/Theme';

export interface ThemeInitialState {
  current: THEME;
}

const initialState: ThemeInitialState = {
  current: THEME.LIGHT,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<THEME>) => {
      state.current = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
const ThemeReducer = themeSlice.reducer;

export { ThemeReducer };
