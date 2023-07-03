import {atom, selector} from 'recoil';

import {LinkSerialized} from '@/domain/model/entity/link';
import {MemoSerialized} from '@/domain/model/entity/memo';
import {TodoSerialized} from '@/domain/model/entity/todo';
import {TodoListSerialized} from '@/domain/model/entity/todoLIst';
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

const activeWannadoTodoListState = selector<TodoListSerialized>({
  key: recoilKeyHashSet.activeWannadoTodos,
  get: ({get}) => {
    const activeWannado = get(activeWannadoState);
    return activeWannado && activeWannado.todoList;
  },
});

export const activeWannadoCompletedTodosState = selector<TodoSerialized[]>({
  key: recoilKeyHashSet.activeWannadoCompletedTodos,
  get: ({get}) => {
    const todoList = get(activeWannadoTodoListState);
    if (!todoList) {
      return [];
    }
    return todoList.todos
      .filter(todo => todo.isCompleted)
      .sort((a, b) => {
        if (a.completedAt && b.completedAt) {
          return a.completedAt.getTime() - b.completedAt.getTime();
        }
        return 0;
      });
  },
});

export const activeWannadoUncompletedTodosState = selector<TodoSerialized[]>({
  key: recoilKeyHashSet.activeWannadoUncompletedTodos,
  get: ({get}) => {
    const todoList = get(activeWannadoTodoListState);
    if (!todoList) {
      return [];
    }
    return todoList.uncompletedTodoOrder
      .map(id => {
        const todo = todoList.todos.find(todo => todo.id === id);
        if (todo) {
          return todo;
        }
        return undefined;
      })
      .filter(todo => todo !== undefined) as TodoSerialized[];
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
