import * as React from 'react'
import Goo from "gooey-react";
import '../styles/GooComponent.scss';

export default function GooComponent(){
    return(
        <div className="goo">
            <Goo>
                <svg width={"192"} height={"192"}>
                    <g style={{animation: "left 16s linear infinite"}}>
                        <circle cx={"30%"} cy={"30%"} fill={"rgb(0, 51, 102)"} r={"32"} style={{ animation: "right 4s linear infinite"}}/>
                        <circle cx={"40%"} cy={"40%"} fill={"rgb(0, 102, 153)"} r={"32"}/>
                        <circle cx={"100%"} cy={"30%"} fill={"DarkBlue"} r={"12"} style={{ animation: "little 6s ease infinite"}}/>
                    </g>
                </svg>
            </Goo>
        </div>
    )
}