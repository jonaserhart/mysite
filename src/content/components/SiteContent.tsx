import * as React from 'react';
import { IContent } from '../types/content';

export default function SiteContent(content: IContent) {

  return (
    <div className="contentRoot" id={content.index.toString()}>
      <h2 className="title">{content.title}</h2>
      <p className="description">{content.description}</p>
      <a className="imageLink" href={content.link.href}>
        <img src={content.link.thumbnailRef} />
      </a>
      <img className="backgroundImage" src={content.pictureRef} />
    </div>
  )
}