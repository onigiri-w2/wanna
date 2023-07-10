import {repoWannado} from '@/domain/config';

import {MemoSerialized, Memo} from '../model/entity/memo';
import {CharId} from '../model/valueobjects/charId';
import {NotFoundWannado, NotFoundMemo} from '../utlis/exception';

export async function createMemo(
  wannadoId: string,
  title: string,
  content: string,
): Promise<MemoSerialized | undefined> {
  const wannado = await repoWannado.find(new CharId(wannadoId));
  if (!wannado) throw new NotFoundWannado();

  const memo = Memo.new(title, content);
  wannado.memoList.addMemo(memo);
  repoWannado.update(wannado);
  return memo.serialize();
}

export async function updateMemoTitleAndContent(
  wanandoId: string,
  memoId: string,
  title: string,
  content: string,
) {
  const wannado = await repoWannado.find(new CharId(wanandoId));
  if (!wannado) throw new NotFoundWannado();

  const memo = wannado.memoList.memos.find(memo => memo.id.id === memoId);
  if (!memo) throw new NotFoundMemo();

  memo.updateTitle(title);
  memo.updateContent(content);
  repoWannado.update(wannado);
}

export async function deleteMemo(wanandoId: string, memoId: string) {
  const wannado = await repoWannado.find(new CharId(wanandoId));
  if (!wannado) throw new NotFoundWannado();

  const memo = wannado.memoList.memos.find(memo => memo.id.id === memoId);
  if (!memo) throw new NotFoundMemo();

  wannado.memoList.removeMemo(memo.id);
  repoWannado.update(wannado);
}

export async function updateMemoOrder(
  wanandoId: string,
  order: string[],
): Promise<void> {
  const wannado = await repoWannado.find(new CharId(wanandoId));
  if (!wannado) throw new NotFoundWannado();

  wannado.memoList.reorder(order.map(id => new CharId(id)));
  repoWannado.update(wannado);
}
