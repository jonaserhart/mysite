import React from 'react';
import { useMediaQuery, createMuiTheme, ThemeProvider } from '@material-ui/core';
import "./global/styles/App.scss";
import StepIndicator from './nav/components/StepIndicator';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const themeName = prefersDarkMode ? "dark" : "light";

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: themeName
        },
      }),
    [prefersDarkMode, themeName],
  );
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className={"content-" + themeName}>

        </div>
        <div className="stepper">
          <StepIndicator />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
