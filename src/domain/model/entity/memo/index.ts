import * as zod from 'zod';

import {CharId, CharIdSchema} from '../../valueobjects/charId';

import {Content, ContentScheam} from './valueobject/content';
import {TitleSchema, Title} from './valueobject/title';

export type MemoSerialized = ReturnType<Memo['serialize']>;
export const MemoSchema = zod.z.object({
  id: CharIdSchema,
  title: TitleSchema,
  content: ContentScheam,
  createdAt: zod.z.date(),
  updatedAt: zod.z.date(),
});
export type IMemo = zod.infer<typeof MemoSchema>;
export class Memo implements IMemo {
  constructor(
    public id: CharId,
    public title: Title,
    public content: Content,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}

  static new(title: string, content: string) {
    const id = CharId.new();
    const now = new Date();
    return new Memo(id, Title.new(title), Content.new(content), now, now);
  }

  public updateTitle(title: string) {
    this.title = Title.new(title);
    this.updatedAt = new Date();
  }

  public updateContent(content: string) {
    this.content = Content.new(content);
    this.updatedAt = new Date();
  }

  public serialize() {
    return {
      id: this.id.id,
      title: this.title.title,
      content: this.content.content,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  public static deserialize(memo: MemoSerialized) {
    return new Memo(
      new CharId(memo.id),
      new Title(memo.title),
      new Content(memo.content),
      memo.createdAt,
      memo.updatedAt,
    );
  }
}
