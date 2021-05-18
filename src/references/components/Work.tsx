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
			{
				isMobile 
				&&
				<div>
					<p>Nothing here yet, but you can</p>
					<a style={{ color: 'white' }} href="https://github.com/jonaserhart">check out my github</a>
				</div> 
			}
		</animated.div>
	);
}