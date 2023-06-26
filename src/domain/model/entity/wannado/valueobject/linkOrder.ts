import * as zod from 'zod';

import {CharId, CharIdSchema} from '../../../valueobjects/charId';

export type LinkOrderSerialized = ReturnType<LinkOrder['serialize']>;
export const LinkOrderSchema = zod.z.object({
  linkIds: zod.z.array(CharIdSchema),
});
export type ILinkOrder = zod.infer<typeof LinkOrderSchema>;

export class LinkOrder implements ILinkOrder {
  constructor(public linkIds: CharId[]) {}

  static new() {
    return new LinkOrder([]);
  }
  public push(linkId: CharId) {
    return new LinkOrder([linkId, ...this.linkIds]);
  }
  public remove(linkId: CharId) {
    return new LinkOrder(this.linkIds.filter(id => id.id !== linkId.id));
  }
  public reorder(linkId: CharId, index: number) {
    const linkIds = this.linkIds.filter(id => id.id !== linkId.id);
    linkIds.splice(index, 0, linkId);
    return new LinkOrder(linkIds);
  }

  public serialize() {
    return this.linkIds.map(id => id.id);
  }

  public static deserialize(linkOrderedList: LinkOrderSerialized) {
    return new LinkOrder(linkOrderedList.map(id => new CharId(id)));
  }
}
