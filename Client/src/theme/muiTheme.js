import { createTheme } from '@mui/material/styles';

const getTheme = (isDarkMode) => createTheme({
  palette: {
    mode: isDarkMode ? 'dark' : 'light', // Set theme mode
    primary: {
      main: '#000000', // black
    },
    secondary: {
      main: '#FFFFFF', // white
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '0.375rem', // Tailwind's rounded-md
        },
      },
    },
  },
});

export default getTheme;
