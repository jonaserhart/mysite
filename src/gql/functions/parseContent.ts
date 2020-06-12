import { IContent, Content } from "../../content/types/content";

export default function parseContent(data: any): IContent[] {
  let contents = [] as Content[];

  if (!data.contents) return contents;

  data.contents.forEach((el: any) => {
    if (el.index && el.title && el.description && el.background && el.background.url && el.href && el.hrefPicture && el.hrefPicture.url && el.backgroundOverlay && el.backgroundOverlay.css) {
      var c = new Content(el.index, el.title, el.description, el.background.url, el.href, el.hrefPicture.url, el.backgroundOverlay.css);
      contents.push(c);
    }
  });

  return contents;
}