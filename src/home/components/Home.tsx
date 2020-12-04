import * as React from 'react';
import { animated } from 'react-spring';
import Trail from '../../global/components/Trail';
import '../styles/Home.scss';

export default function Home({style}: any){

	const [open, setOpen] = React.useState(false);

	React.useEffect(() => {
		setTimeout(() => {
			setOpen(true);
		}, 600);
	},[]);

	return (
		<animated.div className="center home" style={{...style}}>
			<Trail open={open}>
				<h1>Welcome</h1>
				<h2>to my personal website</h2>
			</Trail>
		</animated.div>
	);
}