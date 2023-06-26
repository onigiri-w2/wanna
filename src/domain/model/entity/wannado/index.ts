import * as zod from 'zod';

import {CharId, CharIdSchema} from '../../valueobjects/charId';
import {Link, LinkSchema} from '../link';
import {Memo, MemoSchema} from '../memo';
import {Todo, TodoSchema} from '../todo';

import {Emoji, EmojiSchema} from './valueobject/emoji';
import {LinkOrder} from './valueobject/linkOrder';
import {MemoOrder, MemoOrderSchema} from './valueobject/memoOrder';
import {Title, TitleSchema} from './valueobject/title';
import {TodoOrderSchema, TodoOrder} from './valueobject/todoOrder';

export type WannadoSerialized = ReturnType<Wannado['serialize']>;
export const WannadoSchema = zod.z.object({
  id: CharIdSchema,
  title: TitleSchema,
  emoji: EmojiSchema,
  createdAt: zod.z.date(),
  completedAt: zod.z.date().optional(),
  isCompleted: zod.z.boolean(),
  todos: zod.z.array(TodoSchema),
  todoOrder: TodoOrderSchema,
  memos: zod.z.array(MemoSchema),
  memoOrder: MemoOrderSchema,
  links: zod.z.array(LinkSchema),
});
export type IWannado = zod.infer<typeof WannadoSchema>;

export class Wannado implements IWannado {
  constructor(
    public id: CharId,
    public title: Title,
    public emoji: Emoji,
    public createdAt: Date,
    public completedAt: Date | undefined,
    public isCompleted: boolean,
    public todos: Todo[],
    public todoOrder: TodoOrder,
    public memos: Memo[],
    public memoOrder: MemoOrder,
    public links: Link[],
    public linkOrder: LinkOrder,
  ) {}

  static new(title: string, emoji: string) {
    const id = CharId.new();
    return new Wannado(
      id,
      Title.new(title),
      Emoji.new(emoji),
      new Date(),
      undefined,
      false,
      [],
      TodoOrder.new(),
      [],
      MemoOrder.new(),
      [],
      LinkOrder.new(),
    );
  }

  public updateTitle(title: string) {
    this.title = new Title(title);
  }
  public updateEmoji(emoji: string) {
    this.emoji = new Emoji(emoji);
  }

  public complete() {
    this.isCompleted = true;
    this.completedAt = new Date();
  }
  public uncomplete() {
    this.completedAt = undefined;
    this.isCompleted = false;
  }

  public addTodo(todo: Todo) {
    this.todos.push(todo);
    this.todoOrder = this.todoOrder.push(todo.id);
  }
  public removeTodo(todoId: CharId) {
    this.todos = this.todos.filter(todo => todo.id.id !== todoId.id);
    this.todoOrder = this.todoOrder.remove(todoId);
  }
  public reorderTodo(todoId: CharId, order: number) {
    this.todoOrder = this.todoOrder.reorder(todoId, order);
  }

  public addMemo(memo: Memo) {
    this.memos.push(memo);
    this.memoOrder = this.memoOrder.push(memo.id);
  }
  public removeMemo(memoId: CharId) {
    this.memos = this.memos.filter(memo => memo.id.id !== memoId.id);
    this.memoOrder = this.memoOrder.remove(memoId);
  }
  public reorderMemo(memoId: CharId, order: number) {
    this.memoOrder = this.memoOrder.reorder(memoId, order);
  }

  public addLink(link: Link) {
    this.links.push(link);
    this.linkOrder = this.linkOrder.push(link.id);
  }
  public removeLink(linkId: CharId) {
    this.links = this.links.filter(link => link.id.id !== linkId.id);
    this.linkOrder = this.linkOrder.remove(linkId);
  }
  public reorderLink(linkId: CharId, order: number) {
    this.linkOrder = this.linkOrder.reorder(linkId, order);
  }

  public serialize() {
    return {
      id: this.id.id,
      title: this.title.title,
      emoji: this.emoji.emoji,
      createdAt: this.createdAt,
      completedAt: this.completedAt,
      isCompleted: this.isCompleted,
      todos: this.todos.map(todo => todo.serialize()),
      todoOrder: this.todoOrder.serialize(),
      memos: this.memos.map(memo => memo.serialize()),
      memoOrder: this.memoOrder.serialize(),
      links: this.links.map(link => link.serialize()),
      linkOrder: this.linkOrder.serialize(),
    };
  }

  static deserialize(data: WannadoSerialized) {
    return new Wannado(
      new CharId(data.id),
      new Title(data.title),
      new Emoji(data.emoji),
      data.createdAt,
      data.completedAt,
      data.isCompleted,
      data.todos.map(todo => Todo.deserialize(todo)),
      TodoOrder.deserialize(data.todoOrder),
      data.memos.map(memo => Memo.deserialize(memo)),
      MemoOrder.deserialize(data.memoOrder),
      data.links.map(link => Link.deserialize(link)),
      LinkOrder.deserialize(data.linkOrder),
    );
  }
}
