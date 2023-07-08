import {repoWannado, repoWannadoOrder} from '../config';
import {Wannado, WannadoSerialized} from '../model/entity/wannado';
import {WannadoOrderSerialized} from '../model/entity/wannadoOrder';
import {CharId} from '../model/valueobjects/charId';
import {NotFoundWannado} from '../utlis/exception';

export async function getWannadoAll(): Promise<WannadoSerialized[]> {
  const data = await repoWannado.findAll();
  return data.map(d => d.serialize());
}

export async function getWannado(
  wannadoId: string,
): Promise<WannadoSerialized | undefined> {
  const data = await repoWannado.find(new CharId(wannadoId));
  if (!data) throw new NotFoundWannado();

  return data.serialize();
}

export async function createWannado(title: string): Promise<WannadoSerialized> {
  const wannado = Wannado.new(title);
  const wannadoOrder = await repoWannadoOrder.one();
  if (!wannadoOrder) throw new Error('wannadoOrder is undefined');

  wannadoOrder?.addWannadoId(wannado.id);

  repoWannado.create(wannado);
  repoWannadoOrder.update(wannadoOrder);
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
  const data = await repoWannado.find(new CharId(wannadoId));
  if (!data) throw new NotFoundWannado();

  data.updateTitle(title);
  repoWannado.update(data);
}

export async function deleteWannado(wannadoId: string): Promise<void> {
  const data = await repoWannado.find(new CharId(wannadoId));
  if (!data) throw new NotFoundWannado();

  const wannadoOrder = await repoWannadoOrder.one();
  if (!wannadoOrder) throw new Error('wannadoOrder is undefined');
  wannadoOrder?.removeWannadoId(data.id);

  repoWannado.delete(data.id);
  repoWannadoOrder.update(wannadoOrder);
}

export async function completeWannado(
  wannadoId: string,
): Promise<WannadoSerialized> {
  const data = await repoWannado.find(new CharId(wannadoId));
  if (!data) throw new NotFoundWannado();

  const wannadoOrder = await repoWannadoOrder.one();
  wannadoOrder?.removeWannadoId(data.id);
  if (!wannadoOrder) throw new Error('wannadoOrder is undefined');

  data.complete();
  repoWannado.update(data);
  repoWannadoOrder.update(wannadoOrder);
  return data.serialize();
}

export async function uncompleteWannado(
  wannadoId: string,
): Promise<WannadoSerialized> {
  const data = await repoWannado.find(new CharId(wannadoId));
  if (!data) throw new NotFoundWannado();

  const wannadoOrder = await repoWannadoOrder.one();
  if (!wannadoOrder) throw new Error('wannadoOrder is undefined');
  wannadoOrder?.addWannadoId(data.id);

  data.uncomplete();
  repoWannado.update(data);
  return data.serialize();
}

export async function getWannadoOrder(): Promise<WannadoOrderSerialized> {
  const data = await repoWannadoOrder.one();
  if (!data) throw new Error('wannadoOrder is undefined');
  return data.serialize();
}
