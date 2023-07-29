import * as zod from 'zod';

import {CharId, CharIdSchema} from '../../valueobjects/charId';

export type WannadoOrderSerialized = ReturnType<WannadoOrder['serialize']>;
export const WannadoOrderSchema = zod.z.object({
  id: zod.z.string(),
  order: zod.z.array(CharIdSchema),
});
export type IWannadoOrder = zod.infer<typeof WannadoOrderSchema>;

export const CONST_ID = 'wannado-order' as const; // アプリに1つしか存在しないことを保証するためのID
export class WannadoOrder implements IWannadoOrder {
  constructor(public id: string, public order: CharId[]) {}

  static new() {
    const id = CONST_ID;
    return new WannadoOrder(id, []);
  }

  public addWannadoId(wannadoId: CharId) {
    this.order.unshift(wannadoId);
  }
  public removeWannadoId(wannadoId: CharId) {
    this.order = this.order.filter(id => id.id !== wannadoId.id);
  }
  public reorder(order: CharId[]) {
    this.order = order;
  }
  public serialize() {
    return {
      id: this.id,
      order: this.order.map(id => id.id),
    };
  }
  public static deserialize(serialized: WannadoOrderSerialized) {
    return new WannadoOrder(
      serialized.id,
      serialized.order.map(id => new CharId(id)),
    );
  }
}
