import React from 'react';
import { useMediaQuery, createMuiTheme, ThemeProvider } from '@material-ui/core';
import "./global/styles/App.scss";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import SwipeableCarousel from './content/components/SwipeableCarousel';
import { TransitionGroup } from 'react-transition-group';

const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/ckb6ex495017401xrcd0dfbrw/master",
});

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const themeName = prefersDarkMode ? "dark" : "light";

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: {
            main: "#FFFFFF"
          },
          type: themeName
        },
      }),
    [themeName],
  );
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <TransitionGroup component="div" className="group" >
          <div className="App">
            <div className={"content-" + themeName}>
              <SwipeableCarousel />
            </div>
          </div>
        </TransitionGroup>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
