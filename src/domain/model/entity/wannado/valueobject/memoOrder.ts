import * as zod from 'zod';

import {CharId, CharIdSchema} from '../../../valueobjects/charId';

export type MemoOrderSerialized = ReturnType<MemoOrder['serialize']>;
export const MemoOrderSchema = zod.z.object({
  memoIds: zod.z.array(CharIdSchema),
});
export type IMemoOrder = zod.infer<typeof MemoOrderSchema>;

export class MemoOrder implements IMemoOrder {
  constructor(public memoIds: CharId[]) {}

  static new() {
    return new MemoOrder([]);
  }
  public push(memoId: CharId) {
    return new MemoOrder([memoId, ...this.memoIds]);
  }
  public remove(memoId: CharId) {
    return new MemoOrder(this.memoIds.filter(id => id.id !== memoId.id));
  }
  public reorder(memoId: CharId, index: number) {
    const memoIds = this.memoIds.filter(id => id.id !== memoId.id);
    memoIds.splice(index, 0, memoId);
    return new MemoOrder(memoIds);
  }

  public serialize() {
    return this.memoIds.map(id => id.id);
  }

  public static deserialize(memoOrderedList: MemoOrderSerialized) {
    return new MemoOrder(memoOrderedList.map(id => new CharId(id)));
  }
}
