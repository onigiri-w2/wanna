import * as zod from 'zod';

import {CharId, CharIdSchema} from '../../valueobjects/charId';

import {Title, TitleSchema} from './valueobject/title';
import {Url, UrlSchema} from './valueobject/url';

export const LinkSchema = zod.z.object({
  id: CharIdSchema,
  title: TitleSchema,
  url: UrlSchema,
  createdAt: zod.z.date(),
});
export type ILink = zod.infer<typeof LinkSchema>;
export class Link implements ILink {
  constructor(
    public id: CharId,
    public title: Title,
    public url: Url,
    public createdAt: Date,
  ) {}

  static new(title: string, url: string) {
    const id = CharId.new();
    return new Link(id, Title.new(title), Url.new(url), new Date());
  }

  /**
   * axiosを使ってurlからtitleを取得する
   * @param url
   */
  static async searchTtile(url: string) {
    // axiosを使ってurlからtitleを取得する
    // TODO: 仮実装
    return 'title' + url;
  }
}
