import * as React from 'react';
import { animated } from 'react-spring';
import Projects from './Projects';
import '../styles/References.scss';
import useDevice from '../../global/hooks/useDevice';

export default function Work({style}: any){

	const [isMobile] = useDevice();

	return (
		<animated.div className="center references" style={{...style}}>
			<h1>Work and Projects</h1>
			{!isMobile && <Projects/>}
		</animated.div>
	);
}