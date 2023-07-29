import * as zod from 'zod';

import {CharId, CharIdSchema} from '../../valueobjects/charId';

import {HttpUrl, HttpUrlSchema} from './valueobject/httpUrl';
import {Title, TitleSchema} from './valueobject/title';

export type LinkSerialized = ReturnType<Link['serialize']>;
export const LinkSchema = zod.z.object({
  id: CharIdSchema,
  title: TitleSchema,
  url: HttpUrlSchema,
  createdAt: zod.z.date(),
});
export type ILink = zod.infer<typeof LinkSchema>;
export class Link implements ILink {
  constructor(
    public id: CharId,
    public title: Title,
    public url: HttpUrl,
    public createdAt: Date,
  ) {}

  static new(title: string, url: string) {
    const id = CharId.new();
    if (title.length === 0) title = url;
    return new Link(id, Title.new(title), HttpUrl.new(url), new Date());
  }

  public serialize() {
    return {
      id: this.id.id,
      title: this.title.title,
      url: this.url.url,
      createdAt: this.createdAt,
    };
  }

  public static deserialize(link: LinkSerialized) {
    return new Link(
      new CharId(link.id),
      new Title(link.title),
      new HttpUrl(link.url),
      link.createdAt,
    );
  }
}
