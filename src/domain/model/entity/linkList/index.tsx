import * as zod from 'zod';

import {CharId, CharIdSchema} from '@/domain/model/valueobjects/charId';

import {Link, LinkSchema} from '../link';

// TODO: publicのインスタンス変数はカプセル化できてないので、プライベートにした方が安全。でもまあ、今回はいいか。個人開発だし。たぶん
export type LinkListSerialized = ReturnType<LinkList['serialize']>;
export const LinkListSchema = zod.z.object({
  id: CharIdSchema,
  links: zod.z.array(LinkSchema),
  order: zod.z.array(CharIdSchema),
});
export type ILinkList = zod.infer<typeof LinkListSchema>;
export class LinkList implements ILinkList {
  constructor(
    public id: CharId,
    public links: Link[],
    public order: CharId[],
  ) {}

  static new() {
    const id = CharId.new();
    return new LinkList(id, [], []);
  }

  public reorder(order: CharId[]): void {
    this.order = order;
  }

  public getLinkById(linkId: CharId): Link | undefined {
    // TODO: ここ何かしらの制約がいるはず...。存在しないIdを渡されたらどうするかとか
    return this.links.find(link => link.id.id === linkId.id);
  }

  public addLink(link: Link): void {
    this.links.push(link);
    this.order.unshift(link.id); // 先頭に追加
  }

  public removeLink(linkId: CharId): void {
    this.links = this.links.filter(link => link.id.id !== linkId.id);
    this.order = this.order.filter(id => id.id !== linkId.id);
  }

  public serialize() {
    return {
      id: this.id.id,
      links: this.links.map(link => link.serialize()),
      order: this.order.map(id => id.id),
    };
  }

  public static deserialize(serialized: LinkListSerialized) {
    const id = new CharId(serialized.id);
    const links = serialized.links.map(link => Link.deserialize(link));
    const order = serialized.order.map(id => new CharId(id));
    return new LinkList(id, links, order);
  }
}
