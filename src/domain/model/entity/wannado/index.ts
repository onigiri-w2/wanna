import * as zod from 'zod';

import {CharId, CharIdSchema} from '../../valueobjects/charId';
import {Link, LinkSchema} from '../link';
import {Memo, MemoSchema} from '../memo';
import {TodoList, TodoListSchema} from '../todoLIst';

import {Emoji, EmojiSchema} from './valueobject/emoji';
import {LinkOrder} from './valueobject/linkOrder';
import {MemoOrder, MemoOrderSchema} from './valueobject/memoOrder';
import {Title, TitleSchema} from './valueobject/title';

export type WannadoSerialized = ReturnType<Wannado['serialize']>;
export const WannadoSchema = zod.z.object({
  id: CharIdSchema,
  title: TitleSchema,
  emoji: EmojiSchema,
  createdAt: zod.z.date(),
  completedAt: zod.z.date().optional(),
  isCompleted: zod.z.boolean(),
  todoList: TodoListSchema,
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
    public todoList: TodoList,
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
      TodoList.new(),
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

  public addMemo(memo: Memo) {
    this.memos.push(memo);
    this.memoOrder = this.memoOrder.push(memo.id);
  }
  public removeMemo(memoId: CharId) {
    this.memos = this.memos.filter(memo => memo.id.id !== memoId.id);
    this.memoOrder = this.memoOrder.remove(memoId);
  }
  public reorderMemo(memoId: CharId, newOrder: number) {
    this.memoOrder = this.memoOrder.reorder(memoId, newOrder);
  }

  public addLink(link: Link) {
    this.links.push(link);
    this.linkOrder = this.linkOrder.push(link.id);
  }
  public removeLink(linkId: CharId) {
    this.links = this.links.filter(link => link.id.id !== linkId.id);
    this.linkOrder = this.linkOrder.remove(linkId);
  }
  public reorderLink(linkId: CharId, newOrder: number) {
    this.linkOrder = this.linkOrder.reorder(linkId, newOrder);
  }

  public serialize() {
    return {
      id: this.id.id,
      title: this.title.title,
      emoji: this.emoji.emoji,
      createdAt: this.createdAt,
      completedAt: this.completedAt,
      isCompleted: this.isCompleted,
      todoList: this.todoList.serialize(),
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
      TodoList.deserialize(data.todoList),
      data.memos.map(memo => Memo.deserialize(memo)),
      MemoOrder.deserialize(data.memoOrder),
      data.links.map(link => Link.deserialize(link)),
      LinkOrder.deserialize(data.linkOrder),
    );
  }
}
