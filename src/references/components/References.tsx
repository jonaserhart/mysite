import * as React from 'react';
import { animated } from 'react-spring';

export default function References({style}: any){

    return (
        <animated.div className="center references" style={{...style}}>
            <h1>References</h1>
        </animated.div>
    )
}