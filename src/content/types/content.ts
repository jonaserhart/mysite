
export interface IContent {
  index: number;
  title: string;
  description: string;
  pictureRef: string;
  link: {
    href: string,
    thumbnailRef: string
  }
}

export class Content implements IContent {
  index: number;
  title: string;
  description: string;
  pictureRef: string;
  link: { href: string, thumbnailRef: string };

  constructor(index: number, title: string, description: string, pictureRef: string, linkHref: string, linkThumbnail: string) {
    this.index = index;
    this.title = title;
    this.description = description;
    this.pictureRef = pictureRef;
    this.link = { href: linkHref, thumbnailRef: linkThumbnail }
  }
}