import {repo} from '@/domain/config';

import {MemoSerialized, Memo} from '../model/entity/memo';
import {CharId} from '../model/valueobjects/charId';
import {NotFoundWannado, NotFoundMemo} from '../utlis/exception';

export async function createMemo(
  wannadoId: string,
  title: string,
  content: string,
): Promise<MemoSerialized | undefined> {
  const wannado = await repo.find(new CharId(wannadoId));
  if (!wannado) throw new NotFoundWannado();

  const memo = Memo.new(title, content);
  wannado.addMemo(memo);
  repo.update(wannado);
  return memo.serialize();
}

export async function updateMemoTitle(
  wanandoId: string,
  memoId: string,
  title: string,
) {
  const wannado = await repo.find(new CharId(wanandoId));
  if (!wannado) throw new NotFoundWannado();

  const memo = wannado.memos.find(memo => memo.id.id === memoId);
  if (!memo) throw new NotFoundMemo();

  memo.updateTitle(title);
  repo.update(wannado);
}

export async function updateMemoContent(
  wanandoId: string,
  memoId: string,
  content: string,
) {
  const wannado = await repo.find(new CharId(wanandoId));
  if (!wannado) throw new NotFoundWannado();
  const memo = wannado.memos.find(memo => memo.id.id === memoId);
  if (!memo) throw new NotFoundMemo();

  memo.updateContent(content);
  repo.update(wannado);
}

export async function deleteMemo(wanandoId: string, memoId: string) {
  const wannado = await repo.find(new CharId(wanandoId));
  if (!wannado) throw new NotFoundWannado();

  const memo = wannado.memos.find(memo => memo.id.id === memoId);
  if (!memo) throw new NotFoundMemo();

  wannado.removeMemo(memo.id);
  repo.update(wannado);
}
