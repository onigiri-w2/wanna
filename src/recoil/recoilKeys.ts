// Keyの配列
const recoilKeys = [
  'activeWannadoId',
  'activeWannado',
  'activeWannadoTodoList',
  'activeWannadoTodoListMerged',
  'activeWannadoCompletedTodos',
  'activeWannadoUncompletedTodos',
  'activeWannadoMemos',
  'activeWannadoMemo',
  'activeWannadoLinks',
  'activeWannadoMemoList',
  'activeWannadoLinkList',
  'editTargetTodo',
  'editTodoShow',
  'editTargetMemo',
  'editTargetMemo2',
  'editTargetMemoId',
  'editMemoShow',
] as const;

// Key: Keyのオブジェクト
export const recoilKeyHashSet = Object.fromEntries(
  recoilKeys.map(k => [k, k]),
) as {
  [k in (typeof recoilKeys)[number]]: k;
};

// 重複チェック
const set = new Set(recoilKeys);
if (set.size !== recoilKeys.length) {
  throw Error('recoilKeyが重複しています');
}
