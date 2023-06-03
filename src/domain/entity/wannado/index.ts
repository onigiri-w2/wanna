import * as zod from 'zod';

import {Link, LinkSchema} from '../../entity/link';
import {Memo, MemoSchema} from '../../entity/memo';
import {CharId, CharIdSchema} from '../../valueobjects/charId';
import {Todo, TodoSchema} from '../todo';

import {Emoji, EmojiSchema} from './valueobject/emoji';
import {Title, TitleSchema} from './valueobject/title';

export const WannadoSchema = zod.z.object({
  id: CharIdSchema,
  title: TitleSchema,
  emoji: EmojiSchema,
  createdAt: zod.z.date(),
  completedAt: zod.z.date().optional(),
  isCompleted: zod.z.boolean(),
  todos: zod.z.array(TodoSchema),
  memos: zod.z.array(MemoSchema),
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
    public memos: Memo[],
    public links: Link[],
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
      [],
      [],
    );
  }
  private update({
    title = this.title,
    emoji = this.emoji,
    completedAt = this.completedAt,
    isCompleted = this.isCompleted,
    todos = this.todos,
    memos = this.memos,
    links = this.links,
  }) {
    return new Wannado(
      this.id,
      title,
      emoji,
      this.createdAt,
      completedAt,
      isCompleted,
      todos,
      memos,
      links,
    );
  }

  public complete() {
    return this.update({
      completedAt: new Date(),
      isCompleted: true,
    });
  }
  public uncomplete() {
    return this.update({
      completedAt: undefined,
      isCompleted: false,
    });
  }

  public pushTask(todo: Todo) {
    return this.update({todos: [...this.todos, todo]});
  }
  public removeTask(todoId: CharId) {
    return this.
  }

  public pushMemo(memo: Memo) {
    this.memos.push(memo);
  }
  public removeMemo(memoId: CharId) {
    this.memos = this.memos.filter(memo => memo.id !== memoId);
  }

  public pushLink(link: Link) {
    this.links.push(link);
  }
  public removeLink(linkId: CharId) {
    this.links = this.links.filter(link => link.id !== linkId);
  }
}
