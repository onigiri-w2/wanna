import * as zod from 'zod';

import {CharId, CharIdSchema} from '@/domain/valueobjects/charId';

import {Title, TitleSchema} from './valueobject/title';

export const TodoSchema = zod.z.object({
  id: CharIdSchema,
  title: TitleSchema,
  createdAt: zod.z.date(),
  completedAt: zod.z.date().optional(),
  isCompleted: zod.z.boolean(),
});
export type ITodo = zod.infer<typeof TodoSchema>;
export class Todo implements ITodo {
  constructor(
    public id: CharId,
    public title: Title,
    public isCompleted: boolean,
    public createdAt: Date,
    public completedAt: Date | undefined,
  ) {}

  static new(title: string) {
    const id = CharId.new();
    return new Todo(id, Title.new(title), false, new Date(), undefined);
  }

  complete() {
    this.isCompleted = true;
    this.completedAt = new Date();
  }

  uncomplete() {
    this.isCompleted = false;
    this.completedAt = undefined;
  }
}
