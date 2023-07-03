import {repo} from '../config';
import {Wannado, WannadoSerialized} from '../model/entity/wannado';
import {CharId} from '../model/valueobjects/charId';
import {NotFoundWannado} from '../utlis/exception';

export async function getWannadoAll(): Promise<WannadoSerialized[]> {
  const data = await repo.findAll();
  return data.map(d => d.serialize());
}

export async function getWannado(
  wannadoId: string,
): Promise<WannadoSerialized | undefined> {
  const data = await repo.find(new CharId(wannadoId));
  if (!data) throw new NotFoundWannado();

  return data.serialize();
}

export async function createWannado(
  title: string,
  emoji: string,
): Promise<WannadoSerialized> {
  const wannado = Wannado.new(title, emoji);
  repo.create(wannado);
  return wannado.serialize();
}

/**
 * TODO: repo.findを待つ必要があるのか。本関数が頻繁に呼ばれるなら、repo.findを待たずに返すことも考えるべきかも。その場合は引数にWannadoSerializedを受け取るようにすることになるか...
 * Optimistic Update、楽観的更新という手法がある。これは、データを取得する前に更新を行うことで、データ取得の待ち時間を短縮する手法である。ただし、データ取得に失敗した場合は、更新を取り消す必要がある。
 * https://zenn.dev/funteractiveinc/articles/optimistic-update
 * https://kaminashi-developer.hatenablog.jp/entry/optimistic-update-in-spa
 */
export async function updateWannadoTitle(
  wannadoId: string,
  title: string,
): Promise<void> {
  const data = await repo.find(new CharId(wannadoId));
  if (!data) throw new NotFoundWannado();

  data.updateTitle(title);
  repo.update(data);
}

/**
 * TODO: updateWannadoTitleと同様のTODO
 */
export async function updateWannadoEmoji(
  wannadoId: string,
  emoji: string,
): Promise<void> {
  const data = await repo.find(new CharId(wannadoId));
  if (!data) throw new NotFoundWannado();

  data.updateEmoji(emoji);
  repo.update(data);
}

export async function deleteWannado(wannadoId: string): Promise<void> {
  const data = await repo.find(new CharId(wannadoId));
  if (!data) throw new NotFoundWannado();

  repo.delete(data.id);
}
export async function completeWannado(
  wannadoId: string,
): Promise<WannadoSerialized> {
  const data = await repo.find(new CharId(wannadoId));
  if (!data) throw new NotFoundWannado();

  data.complete();
  repo.update(data);
  return data.serialize();
}
export async function uncompleteWannado(
  wannadoId: string,
): Promise<WannadoSerialized> {
  const data = await repo.find(new CharId(wannadoId));
  if (!data) throw new NotFoundWannado();

  data.uncomplete();
  repo.update(data);
  return data.serialize();
}
