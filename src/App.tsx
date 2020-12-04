import React, { Suspense } from 'react';
import { useMediaQuery, createMuiTheme, ThemeProvider } from '@material-ui/core';
import './global/styles/App.scss';
import './global/styles/Center.scss';
import { useLocation } from 'react-router-dom';
import { animated, useSpring, useTransition } from 'react-spring';
import useDevice from './global/hooks/useDevice';


const pages = [
	React.lazy(() => import('./home/components/Home')),
	React.lazy(() => import('./skills/components/SkillCollection')),
	React.lazy(() => import('./references/components/Work')),
];

function App() {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	const themeName = prefersDarkMode ? 'dark' : 'light';
  
	const [isMobile] = useDevice();

	const NavBar = isMobile 
		? React.lazy(() => import('./nav/components/MobileNav')) 
		: React.lazy(() => import('./nav/components/Nav'));

	const location = useLocation();
	const [index, setIndex] = React.useState([0,0]);
	const [props, set] = useSpring(() => ({opacity: 0, config: { mass: 10, tension: 100, friction: 40 }}));

	const setNewIndex = React.useCallback((newIndex: number) => {
		if (index[1] === newIndex) return;
		setIndex(prev => [prev[1], newIndex]);
	},[setIndex, index]);

	React.useEffect(() => {
		if (location.pathname === '/') setNewIndex(0);
		if (location.pathname === '/skills') setNewIndex(1);
		if (location.pathname === '/links') setNewIndex(2);
	}, [location, setNewIndex]);

	const transitions = useTransition(index[1], p => p, {
		from: { opacity: 0, transform: `translate3d(${index[1] > index[0] ? '' : '-'}100%,0,0)`},
		enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
		leave: { opacity: 0, transform: `translate3d(${index[1] > index[0] ? '-' : ''}50%,0,0)` },
	});

	const theme = React.useMemo(
		() =>
			createMuiTheme({
				palette: {
					primary: {
						main: '#FFFFFF'
					},
					type: themeName
				},
			}),
		[themeName],
	);

	const onLoadBackdrop = React.useCallback(() => {
		set({opacity: 1});
	}, [set]);

	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<animated.div style={props}>
					<img className="backdrop" alt="bd" src={`${process.env.PUBLIC_URL}backdrop.jpg`} onLoad={onLoadBackdrop}/>
				</animated.div>
				<animated.div style={props}>
					<Suspense fallback={() => <div/>}>
						<NavBar/>
					</Suspense>
				</animated.div>
				<Suspense fallback={() => <div/>}>
					{transitions.map(({item, props, key} : any) => {
						//@ts-ignore
						const Page = pages[item];
						return <Page key={key} style={props}/>;
					})}
				</Suspense>
			</div>
		</ThemeProvider>
	);
}

export default App;
