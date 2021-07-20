import { Divider, List, ListItem, ListItemText } from '@material-ui/core';
import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import Card from '../../global/components/Card';
import Trail from '../../global/components/Trail';
import '../styles/Home.scss';

export default function Home({ style }: any) {
	const [open, setOpen] = React.useState(false);
	const [infoOpen, setInfoOpen] = React.useState(false);
	const [age, setAge] = React.useState('');

	const fadeIn = useSpring({
		config: { mass: 3, tension: 700, friction: 40 },
		from: { opacity: 0 },
		to: {
			opacity: infoOpen ? 1 : 0,
		},
	});
	React.useEffect(() => {
		setTimeout(() => setAge(((Date.now() - new Date('22 Dec 1998 18:19:00').getTime()) / 1000).toFixed(0)), 1000);
	}, [age]);

	React.useEffect(() => {
		setAge(((Date.now() - new Date('22 Dec 1998 18:19:00').getTime()) / 1000).toFixed(0));
		setTimeout(() => {
			setOpen(true);
		}, 600);
		setTimeout(() => {
			setInfoOpen(true);
		}, 1200);
	}, []);

	return (
		<>
			<animated.div className="center home" style={{ ...style }}>
				<div className="header">
					<Trail open={open}>
						<h1>Welcome</h1>
						<h2>to my personal website</h2>
					</Trail>
				</div>
				<animated.div style={fadeIn}>
					<Card title="About myself" backgroundImage="me.png">
						<Divider style={{ backgroundColor: 'white' }} />
						<List component="nav" dense>
							<ListItem>
								<ListItemText primary={`I am currently ${age} seconds old`} />
							</ListItem>
							<ListItem>
								<ListItemText primary="I am studying CS in Innsbruck" />
							</ListItem>
							<ListItem>
								<ListItemText primary="Working as an all-rounding developer" />
							</ListItem>
						</List>
					</Card>
				</animated.div>
				<animated.div style={fadeIn}>
					<Card title="My socials" backgroundImage="twitter.png">
						<Divider style={{ backgroundColor: 'white' }} />
						<List component="nav" dense>
							<ListItem button component="a" href="https://twitter.com/erh_art">
								<ListItemText primary="Twitter account: @erh_art" secondary="twitter.com/erh_art"/>
							</ListItem>
							<ListItem button component="a" href="https://www.instagram.com/jonny.a.e/">
								<ListItemText primary="Instagram: jonny.a.e" secondary="instagram.com/jonny.a.e" />
							</ListItem>
							<ListItem button component="a" href="https://www.linkedin.com/in/jonas-erhart-3686b3201/">
								<ListItemText primary="LinkedIn: Jonas Erhart" secondary="linkedin.com/in/jonas-erhart-3686b3201/"/>
							</ListItem>
						</List>
					</Card>
				</animated.div>
				<div style={{ height: 50, width: '100%' }} />
			</animated.div>
		</>
	);
}
