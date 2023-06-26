import {repo} from '../config';
import {LinkSerialized, Link} from '../model/entity/link';
import {CharId} from '../model/valueobjects/charId';
import {NotFoundWannado} from '../utlis/exception';

export async function createLink(
  wannadoId: string,
  title: string,
  url: string,
): Promise<LinkSerialized | undefined> {
  const wannado = await repo.find(new CharId(wannadoId));
  if (!wannado) throw new NotFoundWannado();

  const link = Link.new(title, url);
  wannado.addLink(link);
  return link.serialize();
}

export async function deleteLink(
  wannadoId: string,
  linkId: string,
): Promise<void> {
  const data = await repo.find(new CharId(wannadoId));
  if (!data) throw new NotFoundWannado();

  data.removeLink(new CharId(linkId));
  repo.update(data);
}
