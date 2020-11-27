import * as React from 'react';
import { animated, useSpring } from 'react-spring';

const calc = (x: number, y:number) => [-(y - window.innerHeight / 2) / 30, (x - window.innerWidth / 2) / 30, 1.2]
const trans : any = (x:number, y:number, s:number) => `rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

interface Props {
    title: string;
    backgroundImage : string;
    children?: React.ReactNode;
}

export default function Skill({ title, backgroundImage, children } : Props){

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 500, friction: 30 } }))
    return (
        <animated.div
            className="skill"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x,y)})}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans)}}
        >
            <div className="picture" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${backgroundImage})`}}/>
            <div className="header">
                <h3>{title}</h3>
            </div>
            {children}
          </animated.div>
    )
}