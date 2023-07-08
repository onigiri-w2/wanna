import * as zod from 'zod';

import {CharId, CharIdSchema} from '../../valueobjects/charId';
import {LinkList, LinkListSchema} from '../linkList';
import {MemoListSchema, MemoList} from '../memoList';
import {TodoList, TodoListSchema} from '../todoLIst';

import {Title, TitleSchema} from './valueobject/title';

export type WannadoSerialized = ReturnType<Wannado['serialize']>;
export const WannadoSchema = zod.z.object({
  id: CharIdSchema,
  title: TitleSchema,
  createdAt: zod.z.date(),
  completedAt: zod.z.date().optional(),
  isCompleted: zod.z.boolean(),
  todoList: TodoListSchema,
  memoList: MemoListSchema,
  linkList: LinkListSchema,
});
export type IWannado = zod.infer<typeof WannadoSchema>;

export class Wannado implements IWannado {
  constructor(
    public id: CharId,
    public title: Title,
    public createdAt: Date,
    public completedAt: Date | undefined,
    public isCompleted: boolean,
    public todoList: TodoList,
    public memoList: MemoList,
    public linkList: LinkList,
  ) {}

  static new(title: string) {
    const id = CharId.new();
    return new Wannado(
      id,
      Title.new(title),
      new Date(),
      undefined,
      false,
      TodoList.new(),
      MemoList.new(),
      LinkList.new(),
    );
  }

  public updateTitle(title: string) {
    this.title = new Title(title);
  }

  public complete() {
    this.isCompleted = true;
    this.completedAt = new Date();
  }
  public uncomplete() {
    this.completedAt = undefined;
    this.isCompleted = false;
  }

  public serialize() {
    return {
      id: this.id.id,
      title: this.title.title,
      createdAt: this.createdAt,
      completedAt: this.completedAt,
      isCompleted: this.isCompleted,
      todoList: this.todoList.serialize(),
      memoList: this.memoList.serialize(),
      linkList: this.linkList.serialize(),
    };
  }

  static deserialize(data: WannadoSerialized) {
    return new Wannado(
      new CharId(data.id),
      new Title(data.title),
      data.createdAt,
      data.completedAt,
      data.isCompleted,
      TodoList.deserialize(data.todoList),
      MemoList.deserialize(data.memoList),
      LinkList.deserialize(data.linkList),
    );
  }
}
