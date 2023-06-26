import * as zod from 'zod';

import {CharId, CharIdSchema} from '../../valueobjects/charId';

export const WannadoOrderedListSchema = zod.z.object({
  id: CharIdSchema,
  wannadoIds: zod.z.array(CharIdSchema),
});
export type IWannadoOrderedList = zod.infer<typeof WannadoOrderedListSchema>;

export class WannadoOrderedList implements IWannadoOrderedList {
  constructor(public id: CharId, public wannadoIds: CharId[]) {}

  static new() {
    const id = CharId.new();
    return new WannadoOrderedList(id, []);
  }

  public addWannadoId(wannadoId: CharId) {
    this.wannadoIds = [wannadoId, ...this.wannadoIds];
  }
  public removeWannadoId(wannadoId: CharId) {
    this.wannadoIds = this.wannadoIds.filter(id => id.id !== wannadoId.id);
  }
  public reorder(wannadoId: CharId, index: number) {
    const wannadoIds = this.wannadoIds.filter(id => id.id !== wannadoId.id);
    wannadoIds.splice(index, 0, wannadoId);
    this.wannadoIds = wannadoIds;
  }
}
