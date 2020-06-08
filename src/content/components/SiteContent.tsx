import * as React from 'react';
import { IContent } from '../types/content';
import CSSTransition from 'react-transition-group/CSSTransition';
import "../styles/SiteContent.scss";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

interface Props {
  content: IContent;
}

export default function SiteContent(props: Props) {

  let content = props.content;

  const [loading, setLoading] = React.useState(true);

  const handleImageLoaded = React.useCallback(() => {
    setLoading(false);
  }, [setLoading])

  return (
    <CSSTransition in={!loading} timeout={500} classNames="fadePageContent">
      <div className="contentRoot" id={content.index.toString()}>
        <h2 className="title">{content.title}</h2>
        <p className="description">{content.description}</p>
        <div className="link">
          <img src={content.link.thumbnailRef} alt=" " className="image" />
          <div className="gotoLink">
            <a href={content.link.href} className="linkHref">
              <p>
                <OpenInNewIcon fontSize="large" />
              </p>
            </a>
          </div>
        </div>
        {/* <a className="imageLink" href={content.link.href}>
          <img src={content.link.thumbnailRef} alt=" " />
        </a> */}
        <img src={content.pictureRef} alt="" style={{ display: "none" }} onLoad={handleImageLoaded} />
        <div className="backgroundImage" style={{ backgroundImage: 'url(' + content.pictureRef + ')' }} />
        <div className="overlay" style={{ backgroundColor: content.backdrop, opacity: "25%" }} />
      </div>
    </CSSTransition>
  )
}