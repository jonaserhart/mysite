import * as React from 'react';
import { animated, useTrail } from 'react-spring';

export default function Trail({ open, children, elemHeight, ...props }:any) {

	const height = elemHeight ?? 50;

	const items = React.Children.toArray(children);
	const trail = useTrail(items.length, {
		config: { mass: 5, tension: 2000, friction: 200 },
		opacity: open ? 1 : 0,
		x: open ? 20 : 0,
		height: open ? height : 0,
		from: { opacity: 0, x: 20, height: 0 },
	});
	return (
		<div className="trails-main" {...props}>
			<div>
				{trail.map(({ x, height, ...rest }: any, index: number) => (
					<animated.div
						key={index}
						className="trails-text"
						style={{ ...rest, transform: x.interpolate((x: any) => `translate3d(0,${x}px,0)`) }}>
						<animated.div style={{ height }}>{items[index]}</animated.div>
					</animated.div>
				))}
			</div>
		</div>
	);
}