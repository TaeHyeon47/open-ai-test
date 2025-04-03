import baseTheme from './baseTheme';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiThemeProvider;
