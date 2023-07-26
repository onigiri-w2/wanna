import {produce} from 'immer';
import {setRecoil, getRecoil} from 'recoil-nexus';

import {MemoSerialized} from '@/domain/model/entity/memo';
import * as linkUsecase from '@/domain/usecase/link';
import * as memoUsecase from '@/domain/usecase/memo';
import * as todoUsecase from '@/domain/usecase/todo';
import * as wannadoUsecase from '@/domain/usecase/wannado';

import {
  activeWannadoIdState,
  activeWannadoState,
} from '../states/activeWannado';
import {
  wannadoOverviewAllState,
  wannadoOrderState,
} from '../states/wannadoOverview';

export const activeWannadoActions = {
  setActiveWannado: async (activeWannadoId: string) => {
    const wannado = await wannadoUsecase.getWannado(activeWannadoId);
    if (wannado) setRecoil(activeWannadoState, wannado);
  },

  deleteWannado: () => {
    // TODO: 削除失敗したらどうするか
    const wannadoId = getRecoil(activeWannadoIdState);
    if (!wannadoId) return;
    wannadoUsecase.deleteWannado(wannadoId);
    setRecoil(wannadoOverviewAllState, prev => {
      if (!prev) return prev;
      return prev.filter(w => w.id !== wannadoId);
    });
    setRecoil(wannadoOrderState, prev => {
      if (!prev) return prev;
      return {
        ...prev,
        order: prev.order.filter(id => id !== wannadoId),
      };
    });
  },
  updateWannadoTitle: (title: string) => {
    const wannadoId = getRecoil(activeWannadoIdState);
    wannadoUsecase.updateWannadoTitle(wannadoId, title);
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return {
        ...prev,
        title,
      };
    });
    setRecoil(wannadoOverviewAllState, prev => {
      return produce(prev, draft => {
        const target = draft.find(w => w.id === wannadoId);
        if (!target) return;
        target.title = title;
      });
    });
  },
  completeWannado: async () => {
    const wannadoId = getRecoil(activeWannadoIdState);
    const wannado = await wannadoUsecase.completeWannado(wannadoId);
    if (!wannado) return;
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return {
        ...prev,
        isCompleted: true,
        completedAt: wannado.completedAt,
      };
    });
    setRecoil(wannadoOverviewAllState, prev => {
      return produce(prev, draft => {
        const target = draft.find(w => w.id === wannadoId);
        if (!target) return;
        target.isCompleted = true;
        target.completedAt = wannado.completedAt;
      });
    });
    setRecoil(wannadoOrderState, prev => {
      if (!prev) return prev;
      return {
        ...prev,
        order: prev.order.filter(id => id !== wannadoId),
      };
    });
  },
  uncompleteWannado: async () => {
    const wannadoId = getRecoil(activeWannadoIdState);
    const wannado = await wannadoUsecase.uncompleteWannado(wannadoId);
    if (!wannado) return;
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return {
        ...prev,
        isCompleted: false,
        completedAt: wannado.completedAt,
      };
    });
    setRecoil(wannadoOverviewAllState, prev => {
      return produce(prev, draft => {
        const target = draft.find(w => w.id === wannadoId);
        if (!target) return;
        target.isCompleted = false;
        target.completedAt = wannado.completedAt;
      });
    });
    // TODO: domain側とのロジックの二重化が起きてるのが危険
    setRecoil(wannadoOrderState, prev => {
      if (!prev) return prev;
      return {
        ...prev,
        order: [...prev.order, wannadoId],
      };
    });
  },

  addTodo: async (title: string) => {
    const wannadoId = getRecoil(activeWannadoIdState);
    const todo = await todoUsecase.createTodo(wannadoId, title);
    if (!todo) return;
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        draft.todoList.todos.push(todo);
        draft.todoList.uncompletedTodoOrder.unshift(todo.id);
      });
    });
    setRecoil(wannadoOverviewAllState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        const wannado = draft.find(w => w.id === wannadoId);
        if (!wannado) return;
        wannado.uncompletedTodoCount = wannado.uncompletedTodoCount + 1;
      });
    });
  },
  deleteTodo: (todoId: string, isCompleted: boolean) => {
    const wannadoId = getRecoil(activeWannadoIdState);
    todoUsecase.deleteTodo(wannadoId, todoId);
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        draft.todoList.todos = draft.todoList.todos.filter(
          t => t.id !== todoId,
        );
        draft.todoList.uncompletedTodoOrder =
          draft.todoList.uncompletedTodoOrder.filter(id => id !== todoId);
      });
    });
    setRecoil(wannadoOverviewAllState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        const wannado = draft.find(w => w.id === wannadoId);
        if (!wannado) return;

        if (isCompleted)
          wannado.completedTodoCount = wannado.completedTodoCount - 1;
        else wannado.uncompletedTodoCount = wannado.uncompletedTodoCount - 1;
      });
    });
  },
  updateTodoTitle: (todoId: string, title: string) => {
    const wannadoId = getRecoil(activeWannadoIdState);
    todoUsecase.updateTodoTitle(wannadoId, todoId, title);
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        const todo = draft.todoList.todos.find(t => t.id === todoId);
        if (!todo) return;
        todo.title = title;
      });
    });
  },
  completeTodo: async (todoId: string) => {
    // TODO: 完了失敗したらどうするか考える
    const wannadoId = getRecoil(activeWannadoIdState);
    const uT = await todoUsecase.completeTodo(wannadoId, todoId);
    if (!uT) return;
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        const todo = draft.todoList.todos.find(t => t.id === todoId);
        if (!todo) return;
        todo.isCompleted = true;
        todo.completedAt = uT.completedAt;
        draft.todoList.uncompletedTodoOrder =
          draft.todoList.uncompletedTodoOrder.filter(id => id !== todoId);
      });
    });
    setRecoil(wannadoOverviewAllState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        const wannado = draft.find(w => w.id === wannadoId);
        if (!wannado) return;
        wannado.completedTodoCount = wannado.completedTodoCount + 1;
        wannado.uncompletedTodoCount = wannado.uncompletedTodoCount - 1;
      });
    });
  },
  uncompleteTodo: async (todoId: string) => {
    // TODO: 完了失敗したらどうするか考える
    const wannadoId = getRecoil(activeWannadoIdState);
    const uT = await todoUsecase.uncompleteTodo(wannadoId, todoId);
    if (!uT) return;
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        const todo = draft.todoList.todos.find(t => t.id === todoId);
        if (!todo) return;
        todo.isCompleted = false;
        todo.completedAt = uT.completedAt;
        draft.todoList.uncompletedTodoOrder.push(todoId);
      });
    });
    setRecoil(wannadoOverviewAllState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        const wannado = draft.find(w => w.id === wannadoId);
        if (!wannado) return;
        wannado.completedTodoCount = wannado.completedTodoCount - 1;
        wannado.uncompletedTodoCount = wannado.uncompletedTodoCount + 1;
      });
    });
  },
  updateTodoOrder: (todoOrder: string[]) => {
    const wannadoId = getRecoil(activeWannadoIdState);
    todoUsecase.reorder(wannadoId, todoOrder);
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        draft.todoList.uncompletedTodoOrder = todoOrder;
      });
    });
  },
  // Note: 諸事情により、この関数ではmemoUseCaseを実行しない。
  // usecaseに登録したmemoのidがそこで必要になるので、ここではusecaseを実行しない。
  addMemo: async (memo: MemoSerialized) => {
    const wannadoId = getRecoil(activeWannadoIdState);
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        // TODO: ここいけてないかもかぁ...DDD側とロジックが二重になってる。DDD側に寄せないといけないかも
        draft.memoList.memos.push(memo);
        draft.memoList.order.unshift(memo.id);
      });
    });
    setRecoil(wannadoOverviewAllState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        const wannado = draft.find(w => w.id === wannadoId);
        if (!wannado) return;
        wannado.memoCount = wannado.memoCount + 1;
      });
    });
  },
  deleteMemo: (memoId: string) => {
    // TODO: 削除失敗したらどうするか考える
    const wannadoId = getRecoil(activeWannadoIdState);
    memoUsecase.deleteMemo(wannadoId, memoId);
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        draft.memoList.memos = draft.memoList.memos.filter(
          m => m.id !== memoId,
        );
        draft.memoList.order = draft.memoList.order.filter(id => id !== memoId);
      });
    });
    setRecoil(wannadoOverviewAllState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        const wannado = draft.find(w => w.id === wannadoId);
        if (!wannado) return;
        wannado.memoCount = wannado.memoCount - 1;
      });
    });
  },
  updateMemoOrder: (memoOrder: string[]) => {
    // TODO: ユースケース失敗したら状態の変更はしないかも
    const wannadoId = getRecoil(activeWannadoIdState);
    memoUsecase.updateMemoOrder(wannadoId, memoOrder);
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        draft.memoList.order = memoOrder;
      });
    });
  },
  updateMemoTitleAndContent: (
    memoId: string,
    title: string,
    content: string,
  ) => {
    // TODO: アップデート失敗したらどうするか考える
    const wannadoId = getRecoil(activeWannadoIdState);
    memoUsecase.updateMemoTitleAndContent(wannadoId, memoId, title, content);
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        const memo = draft.memoList.memos.find(m => m.id === memoId);
        if (!memo) return;
        memo.title = title;
        memo.content = content;
      });
    });
  },
  addLink: async (title: string, url: string) => {
    const wannadoId = getRecoil(activeWannadoIdState);
    const newLink = await linkUsecase.createLink(wannadoId, title, url);
    if (!newLink) return;
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        draft.linkList.links.push(newLink);
        draft.linkList.order.unshift(newLink.id);
      });
    });
    setRecoil(wannadoOverviewAllState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        const wannado = draft.find(w => w.id === wannadoId);
        if (!wannado) return;
        wannado.linkCount = wannado.linkCount + 1;
      });
    });
  },
  deleteLink: (linkId: string) => {
    // TODO: deleteLinkが失敗したら状態変更は行わないようにした方がいいかも
    const wannadoId = getRecoil(activeWannadoIdState);
    linkUsecase.deleteLink(wannadoId, linkId);
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        draft.linkList.links = draft.linkList.links.filter(
          l => l.id !== linkId,
        );
        draft.linkList.order = draft.linkList.order.filter(l => l !== linkId);
      });
    });
    setRecoil(wannadoOverviewAllState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        const wannado = draft.find(w => w.id === wannadoId);
        if (!wannado) return;
        wannado.linkCount = wannado.linkCount - 1;
      });
    });
  },
  updateLinkOrder: (linkOrder: string[]) => {
    const wannadoId = getRecoil(activeWannadoIdState);
    linkUsecase.reorder(wannadoId, linkOrder);
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        draft.linkList.order = linkOrder;
      });
    });
  },
};
