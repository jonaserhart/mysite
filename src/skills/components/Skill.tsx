import * as React from 'react';
import { useInView } from 'react-hook-inview';
import { animated, useSpring } from 'react-spring';
import useDevice from '../../global/hooks/useDevice';

const trans : any = (s:number) => `scale(${s})`;

interface Props {
    title: string;
    backgroundImage : string;
    children?: React.ReactNode;
}

export default function Skill({ title, backgroundImage, children } : Props){

	const [props, set] = useSpring(() => ({ s: 0.8, config: { mass: 5, tension: 600, friction: 40 } }));
	const [oProps, setoProps] = useSpring(() => ({opacity: 0, config: { mass: 5, tension: 600, friction: 40 }}));

	const [ref] = useInView(
		{
			threshold: 0,
			onEnter: () => {
				set({s: 1.1});
			},
			onLeave: () => {
				set({s: 0.8});
			}
		}
	);

	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		const imageLoader = new Image();
		imageLoader.src = process.env.PUBLIC_URL + backgroundImage;
    
		imageLoader.onload = () => {
			setLoading(false);
			setoProps({opacity: 1});
		};
	}, [backgroundImage, setLoading, setoProps]);

	const [isMobile] = useDevice();

	if (isMobile) 
		return(
			<animated.div
				className="skill skill-mobile"
				style={{ transform: props.s.interpolate(trans)}}
				ref={ref}
			>
				{
					loading ?
						<animated.div className="picture-placeholder"/>
						:
						<animated.div className="picture" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${backgroundImage})`, ...oProps}}/>
				}
				<div className="header">
					<h3>{title}</h3>
				</div>
				{children}
			</animated.div>
		);

	return (
		<animated.div
			className="skill skill-desktop"
			onMouseMove={() => set({ s: 1.2})}
			onMouseLeave={() => set({ s: 0.9 })}
			style={{ transform: props.s.interpolate(trans)}}
		>
			{
				loading ?
					<animated.div className="picture-placeholder"/>
					:
					<animated.div className="picture" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${backgroundImage})`, ...oProps}}/>
			}
			<div className="header">
				<h3>{title}</h3>
			</div>
			{children}
		</animated.div>
	);
}