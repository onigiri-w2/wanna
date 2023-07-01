import * as zod from 'zod';

import {CharId, CharIdSchema} from '@/domain/model/valueobjects/charId';

import {Title, TitleSchema} from './valueobject/title';

export type TodoSerialized = ReturnType<Todo['serialize']>;
export const TodoSchema = zod.z.object({
  id: CharIdSchema,
  title: TitleSchema,
  isCompleted: zod.z.boolean(),
  createdAt: zod.z.date(),
  completedAt: zod.z.date().optional(),
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

  public updateTitle(title: string) {
    if (this.isCompleted)
      throw new Error('Cannot update title of completed todo');
    this.title = Title.new(title);
  }

  public complete() {
    this.isCompleted = true;
    this.completedAt = new Date();
  }

  public uncomplete() {
    this.isCompleted = false;
    this.completedAt = undefined;
  }

  public serialize() {
    return {
      id: this.id.id,
      title: this.title.title,
      isCompleted: this.isCompleted,
      createdAt: this.createdAt,
      completedAt: this.completedAt,
    };
  }

  public static deserialize(todo: TodoSerialized) {
    return new Todo(
      new CharId(todo.id),
      new Title(todo.title),
      todo.isCompleted,
      todo.createdAt,
      todo.completedAt,
    );
  }
}
