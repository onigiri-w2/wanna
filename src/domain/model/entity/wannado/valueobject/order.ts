import * as zod from 'zod';

const E_ORDER_MIN = '順序の最小値は0です。';
const E_ORDER_INT = '順序は整数である必要があります。';

export const OrderSchema = zod.z.object({
  order: zod.number().int(E_ORDER_INT).min(0, E_ORDER_MIN),
});
export type IOrder = zod.infer<typeof OrderSchema>;

export class Order implements IOrder {
  constructor(public readonly order: number) {
    OrderSchema.parse({order});
  }
}
