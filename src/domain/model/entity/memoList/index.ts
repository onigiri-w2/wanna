import * as zod from 'zod';

import {CharId, CharIdSchema} from '@/domain/model/valueobjects/charId';

import {MemoSchema, Memo} from '../memo';

// TODO: publicのインスタンス変数はカプセル化できてないので、プライベートにした方が安全。でもまあ、今回はいいか。個人開発だし。たぶん
export type MemoListSerialized = ReturnType<MemoList['serialize']>;
export const MemoListSchema = zod.z.object({
  id: CharIdSchema,
  memos: zod.z.array(MemoSchema),
  order: zod.z.array(CharIdSchema),
});
export type IMemoList = zod.infer<typeof MemoListSchema>;
export class MemoList implements IMemoList {
  constructor(
    public id: CharId,
    public memos: Memo[],
    public order: CharId[],
  ) {}

  static new() {
    const id = CharId.new();
    return new MemoList(id, [], []);
  }

  public reorder(order: CharId[]): void {
    this.order = order;
  }

  public getTodoById(memoId: CharId): Memo | undefined {
    // TODO: ここ何かしらの制約がいるはず...。存在しないIdを渡されたらどうするかとか
    return this.memos.find(memo => memo.id.id === memoId.id);
  }

  public addMemo(memo: Memo): void {
    this.memos.push(memo);
    this.order.unshift(memo.id); // 先頭に追加
  }

  public removeMemo(memoId: CharId): void {
    this.memos = this.memos.filter(memo => memo.id.id !== memoId.id);
    this.order = this.order.filter(id => id.id !== memoId.id);
  }

  public serialize() {
    return {
      id: this.id.id,
      memos: this.memos.map(memo => memo.serialize()),
      order: this.order.map(id => id.id),
    };
  }

  public static deserialize(serialized: MemoListSerialized) {
    const id = new CharId(serialized.id);
    const memos = serialized.memos.map(memo => Memo.deserialize(memo));
    const order = serialized.order.map(id => new CharId(id));
    return new MemoList(id, memos, order);
  }
}
