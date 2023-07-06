import {repoWannado} from '../config';
import {LinkSerialized, Link} from '../model/entity/link';
import {CharId} from '../model/valueobjects/charId';
import {NotFoundWannado} from '../utlis/exception';

export async function createLink(
  wannadoId: string,
  title: string,
  url: string,
): Promise<LinkSerialized | undefined> {
  const wannado = await repoWannado.find(new CharId(wannadoId));
  if (!wannado) throw new NotFoundWannado();

  const link = Link.new(title, url);
  wannado.linkList.addLink(link);
  repoWannado.update(wannado);
  return link.serialize();
}

export async function deleteLink(
  wannadoId: string,
  linkId: string,
): Promise<void> {
  const data = await repoWannado.find(new CharId(wannadoId));
  if (!data) throw new NotFoundWannado();

  data.linkList.removeLink(new CharId(linkId));
  repoWannado.update(data);
}

export async function reorder(
  wannadoId: string,
  order: string[],
): Promise<void> {
  const data = await repoWannado.find(new CharId(wannadoId));
  if (!data) throw new NotFoundWannado();

  data.linkList.reorder(order.map(id => new CharId(id)));
  repoWannado.update(data);
}
