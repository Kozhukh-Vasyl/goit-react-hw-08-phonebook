import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export function ToggleColorMode({ children }) {
  const [mode, setMode] = React.useState(() => {
    return JSON.parse(localStorage.getItem('theme')) ?? 'light';
  });

  React.useEffect(() => {
    window.localStorage.setItem('theme', JSON.stringify(mode));
  }, [mode]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#D2F5A4',
          },
          button: {
            black: '#595959',
            main: '#ffffff',
            dark: '#3c3f3c',
            bcg: '#D2F5A4',
            bcgDark: '#f5f5f5',
            hover: '#92C58B',
            hoverDark: '#8a8a8a',
          },
          secondaryBtn: {
            black: '#595959',
            main: '#ffffff',
            bcg: '#809c64',
            bcgDark: '#b6b0b0',
            hoverDark: '#6e736e',
            hover: '#304930',
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
