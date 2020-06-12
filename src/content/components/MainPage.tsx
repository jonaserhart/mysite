import CSSTransition from "react-transition-group/CSSTransition";
import GooComponent from "./GooComponent";
import * as React from "react";
import "../styles/MainPage.scss"

export function MainPage(props: { imageLoading: boolean, onLoad: () => void }) {
    return <CSSTransition in={!props.imageLoading} timeout={500} classNames="fadePageContent">
        <div className="contentRootMain" id={"main"}>
            <h2 className="titleMain">{"Welcome"}</h2>
            <p className="descriptionMain">{"to my personal website"}</p>
            <p className="swipeText">{"swipe/scroll to see more"}</p>
            <div className="goo">
                <GooComponent/>
            </div>
            <img src={""} alt="" style={{display: "none"}} onLoad={props.onLoad}/>
            <div className="backgroundImage" style={{backgroundImage: "url(" + "" + ")"}}/>
        </div>
    </CSSTransition>;
}