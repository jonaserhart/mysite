import CSSTransition from "react-transition-group/CSSTransition";
import GooComponent from "./GooComponent";
import * as React from "react";
import "../styles/MainPage.scss"
import { useWindowSize } from "../../global/hooks/useWindowSize";

export function MainPage() {


    const [imageLoading, setImageLoading] = React.useState(false);
    const size = useWindowSize();


    const handleImageLoaded = React.useCallback(() => {
        setImageLoading(!imageLoading);
    }, [])

    const isSmallScreen = size.width < 786;

    return <CSSTransition in={!imageLoading} timeout={500} classNames="fadePageContent">
        <div className="contentRootMain" id={"main"}>
            <h2 className="titleMain">{"Welcome"}</h2>
            <p className="descriptionMain">{"to my personal website"}</p>
            <p className="swipeText">{(isSmallScreen ? "swipe right" : "scroll") + " to see more"}</p>
            <div className="goo">
                <GooComponent />
            </div>
            <img src={"backgroundMain.png"} alt="" style={{ display: "none" }} onLoad={handleImageLoaded} />
            <div className="backgroundImage" style={{ backgroundImage: "url(" + "backgroundMain.png" + ")" }} />
        </div>
    </CSSTransition>;
}