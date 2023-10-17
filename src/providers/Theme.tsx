import { FC } from 'react';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from '../theme';
import { PropsWithChildren } from '../resources/interfaces/PropsWithChildren';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { THEME } from '../resources/enums/Theme';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const currentTheme = useSelector((state: RootState) => state.theme.current);

  const theme = currentTheme === THEME.LIGHT ? lightTheme : darkTheme;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <>{children}</>
    </MuiThemeProvider>
  );
};
