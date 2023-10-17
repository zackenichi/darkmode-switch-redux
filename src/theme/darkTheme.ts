import { ThemeOptions, createTheme } from '@mui/material/styles';
import { darkColors as colors } from './colors';

const componentOverrides: ThemeOptions['components'] = {
  MuiTypography: {
    styleOverrides: {
      h1: {
        textAlign: 'center',
        fontSize: '2.5rem',
        fontWeight: 800,
        color: colors.primary,
        '@media (max-width: 600px)': {
          fontSize: '1.5rem',
        },
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 800,
      },
      h3: {
        fontSize: '1.2rem',
        fontWeight: 600,
      },
      h4: {
        fontSize: '1rem',
        fontWeight: 600,
        color: colors.primary,
      },
      body2: {
        fontSize: '16px',
        fontWeight: 400,
        textDecoration: 'underline',
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
      },
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        '& th': {
          fontWeight: 'bold',
        },
      },
    },
  },
};

const darkTheme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: colors.background,
      paper: colors.cardbg,
    },
    success: {
      main: colors.success,
    },
    info: {
      main: colors.info,
    },
    warning: {
      main: colors.warning,
    },
  },
  components: componentOverrides,
});

export { darkTheme };
