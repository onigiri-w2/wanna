import * as zod from 'zod';

import {CharId, CharIdSchema} from '../../valueobjects/charId';

import {Content, ContentScheam} from './valueobject/body';

export const MemoSchema = zod.z.object({
  id: CharIdSchema,
  content: ContentScheam,
  createdAt: zod.z.date(),
  updatedAt: zod.z.date(),
});
export type IMemo = zod.infer<typeof MemoSchema>;
export class Memo implements IMemo {
  constructor(
    public id: CharId,
    public content: Content,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}

  static new(content: string) {
    const id = CharId.new();
    const now = new Date();
    return new Memo(id, Content.new(content), now, now);
  }

  update(content: string) {
    this.content = Content.new(content);
    this.updatedAt = new Date();
  }
}
