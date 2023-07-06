// Keyの配列
const recoilKeys = [
  'activeWannadoId',
  'activeWannado',
  'activeWannadoTodoList',
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
