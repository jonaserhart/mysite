import * as React from 'react';
import { useInView } from 'react-hook-inview';
import { animated, useSpring } from 'react-spring';
import useDevice from '../../global/hooks/useDevice';

const trans : any = (s:number) => `scale(${s})`

interface Props {
    title: string;
    backgroundImage : string;
    children?: React.ReactNode;
}

export default function Skill({ title, backgroundImage, children } : Props){

    const [props, set] = useSpring(() => ({ s: 1, config: { mass: 3, tension: 600, friction: 25 } }))
    const [ref] = useInView(
        {
            threshold: 1,
            onEnter: () => {
                set({s: 1.15});
            },
            onLeave: () => {
                set({s: 1});
            }
        }
    )

    const [isMobile] = useDevice();

    if (isMobile) 
    return(
        <animated.div
        className="skill skill-mobile"
        style={{ transform: props.s.interpolate(trans)}}
        ref={ref}
    >
        <div className="picture" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${backgroundImage})`}}/>
        <div className="header">
            <h3>{title}</h3>
        </div>
        {children}
      </animated.div>
    )

    return (
        <animated.div
            className="skill skill-desktop"
            onMouseMove={() => set({ s: 1.2})}
            onMouseLeave={() => set({ s: 1 })}
            style={{ transform: props.s.interpolate(trans)}}
        >
            <div className="picture" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${backgroundImage})`}}/>
            <div className="header">
                <h3>{title}</h3>
            </div>
            {children}
          </animated.div>
    )
}