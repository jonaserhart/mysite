import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import '../styles/Projects.scss';

const calc = (x:number, y:number) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 : any = (x:number, y:number) => `translate3d(${x / 16}px,${y / 16}px,0)`
const trans2 : any = (x:number, y:number) => `translate3d(${x / 5}px,${y / 5 - 100 }px,0)`
const trans3 : any = (x:number, y:number) => `translate3d(${x / 7 - 200}px,${y / 7 - 150}px,0)`
const trans4 : any = (x:number, y:number) => `translate3d(${x / 9 + 150}px,${y / 9 - 200}px,0)`

export default function Projects(){
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 3, tension: 700, friction: 40 } }))
    return (
      <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })} onMouseLeave={() => set({xy: [0,0]})}>
        <animated.div className="card1" style={{ transform: props.xy.interpolate(trans1) }} />
        <animated.div className="card2" style={{ transform: props.xy.interpolate(trans2), zIndex: 100 }} >
            <a href="https://github.com/jonaserhart">GitHub.com</a>
        </animated.div>
        <animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} >
            <a href="https://psychotherapie-erhart.at">psychotherapie-erhart.at</a>
            </animated.div>
        <animated.div className="card4" style={{ transform: props.xy.interpolate(trans4) }} >
            <a href="https://blaecherlich.at">blaecherlich.at</a>
        </animated.div>
      </div>
    )
}