import {atom, selector} from 'recoil';

import {LinkSerialized} from '@/domain/model/entity/link';
import {LinkListSerialized} from '@/domain/model/entity/linkList';
import {MemoSerialized} from '@/domain/model/entity/memo';
import {MemoListSerialized} from '@/domain/model/entity/memoList';
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
  key: recoilKeyHashSet.activeWannadoTodoList,
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

const activeWannadoMemoListState = selector<MemoListSerialized>({
  key: recoilKeyHashSet.activeWannadoMemoList,
  get: ({get}) => {
    const activeWannado = get(activeWannadoState);
    return activeWannado && activeWannado.memoList;
  },
});

export const activeWannadoMemosState = selector<MemoSerialized[]>({
  key: recoilKeyHashSet.activeWannadoMemos,
  get: ({get}) => {
    const memoList = get(activeWannadoMemoListState);
    if (!memoList) {
      return [];
    }
    return memoList.order
      .map(id => {
        const memo = memoList.memos.find(memo => memo.id === id);
        if (memo) {
          return memo;
        }
        return undefined;
      })
      .filter(memo => memo !== undefined) as MemoSerialized[];
  },
});

export const activeWannadoLinkListState = selector<LinkListSerialized>({
  key: recoilKeyHashSet.activeWannadoLinkList,
  get: ({get}) => {
    const activeWannado = get(activeWannadoState);
    return activeWannado && activeWannado.linkList;
  },
});

export const activeWannadoLinksState = selector<LinkSerialized[]>({
  key: recoilKeyHashSet.activeWannadoLinks,
  get: ({get}) => {
    const linkList = get(activeWannadoLinkListState);
    return linkList.order
      .map(id => {
        const link = linkList.links.find(link => link.id === id);
        if (link) {
          return link;
        }
        return undefined;
      })
      .filter(link => link !== undefined) as LinkSerialized[];
  },
});
