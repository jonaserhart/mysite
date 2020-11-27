import React from 'react';
import { useMediaQuery, createMuiTheme, ThemeProvider } from '@material-ui/core';
import "./global/styles/App.scss";
import Home from './home/components/Home';
import './global/styles/Center.scss';
import { useLocation, useHistory} from 'react-router-dom';
import SkillCollection from './skills/components/SkillCollection';
import { useTransition } from 'react-spring';
import Nav from './nav/components/Nav';
import References from './references/components/References';


const pages = [
    Home,
    SkillCollection,
    References
]

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const themeName = prefersDarkMode ? "dark" : "light";

  const location = useLocation();
  const [index, setIndex] = React.useState([0,0])

  const setNewIndex = React.useCallback((newIndex: number) => {
      if (index[1] === newIndex) return;
      setIndex(prev => [prev[1], newIndex]);
  },[setIndex, index]);

  React.useEffect(() => {
      if (location.pathname === '/') setNewIndex(0);
      if (location.pathname === '/skills') setNewIndex(1);
      if (location.pathname === '/references') setNewIndex(2);
  }, [location, setNewIndex]);

  const transitions = useTransition(index[1], p => p, {
    from: { opacity: 0, transform: `translate3d(${index[1] > index[0] ? "" : "-"}100%,0,0)`},
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: `translate3d(${index[1] > index[0] ? "-" : ""}50%,0,0)` },
  })

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
          <div className="App">
              <Nav/>
              {transitions.map(({item, props, key} : any) => {
                  //@ts-ignore
                  const Page = pages[item]
                  return <Page key={key} style={props}/>
              })}
          </div>
    </ThemeProvider>
  );
}

export default App;
