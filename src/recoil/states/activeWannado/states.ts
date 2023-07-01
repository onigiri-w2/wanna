import {atom, selector} from 'recoil';

import {LinkSerialized} from '@/domain/model/entity/link';
import {MemoSerialized} from '@/domain/model/entity/memo';
import {TodoSerialized} from '@/domain/model/entity/todo';
import {WannadoSerialized} from '@/domain/model/entity/wannado';
import {recoilKeyHashSet} from '@/recoil/recoilKeys';

// export const activeWannadoState = selector<WannadoSerialized | undefined>({
//   key: recoilKeyHashSet.activeWannado,
//   get: ({get}) => {
//     const activeWannadoId = get(activeWannadoIdState);
//     const wannado = getWannado(activeWannadoId);
//     return wannado;
//   },
// });

export const activeWannadoState = atom<WannadoSerialized>({
  key: recoilKeyHashSet.activeWannado,
  default: undefined,
});

export const activeWannadoIdState = selector<string>({
  key: recoilKeyHashSet.activeWannadoId,
  get: ({get}) => {
    const activeWannado = get(activeWannadoState);
    return activeWannado ? activeWannado.id : '';
  },
});

export const activeWannadoTodosState = selector<TodoSerialized[]>({
  key: recoilKeyHashSet.activeWannadoTodos,
  get: ({get}) => {
    const activeWannado = get(activeWannadoState);
    return activeWannado ? activeWannado.todos : [];
  },
});

export const activeWannadoCompletedTodosState = selector<TodoSerialized[]>({
  key: recoilKeyHashSet.activeWannadoCompletedTodos,
  get: ({get}) => {
    const todos = get(activeWannadoTodosState);
    return todos.filter(todo => todo.isCompleted);
  },
});

export const activeWannadoUncompletedTodosState = selector<TodoSerialized[]>({
  key: recoilKeyHashSet.activeWannadoUncompletedTodos,
  get: ({get}) => {
    const todos = get(activeWannadoTodosState);
    return todos.filter(todo => !todo.isCompleted);
  },
});

export const activeWannadoMemosState = selector<MemoSerialized[]>({
  key: recoilKeyHashSet.activeWannadoMemos,
  get: ({get}) => {
    const activeWannado = get(activeWannadoState);
    return activeWannado ? activeWannado.memos : [];
  },
});

export const activeWannadoLinksState = selector<LinkSerialized[]>({
  key: recoilKeyHashSet.activeWannadoLinks,
  get: ({get}) => {
    const activeWannado = get(activeWannadoState);
    return activeWannado ? activeWannado.links : [];
  },
});
