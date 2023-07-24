import {produce} from 'immer';
import {setRecoil, getRecoil} from 'recoil-nexus';

import * as usecase from '@/domain/usecase/wannado';

import {activeWannadoIdState} from '../activeWannado';

import {wannadoOrderState, wannadoOverviewAllState} from './states';

export const wannadoOverviewAllActions = {
  addWannado: async (title: string) => {
    const wannado = await usecase.createWannado(title);
    if (!wannado) return;
    setRecoil(wannadoOverviewAllState, prev => {
      if (!prev) return prev;
      return [
        ...prev,
        {
          id: wannado.id,
          title: wannado.title,
          isCompleted: wannado.isCompleted,
          completedAt: wannado.completedAt,
          completedTodoCount: wannado.todoList.todos.filter(t => t.isCompleted)
            .length,
          uncompletedTodoCount: wannado.todoList.todos.filter(
            t => !t.isCompleted,
          ).length,
          memoCount: wannado.memoList.memos.length,
          linkCount: wannado.linkList.links.length,
        },
      ];
    });
    setRecoil(wannadoOrderState, prev => {
      if (!prev) return prev;
      return {
        ...prev,
        order: [wannado.id, ...prev.order],
      };
    });
  },
  deleteWannado: (wannadoId: string) => {
    // TODO: 削除失敗したらどうするか
    usecase.deleteWannado(wannadoId);
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
  setOrderWannado: (order: string[]) => {
    setRecoil(wannadoOrderState, prev => {
      if (!prev) return prev;
      return {
        ...prev,
        order,
      };
    });
  },
  completeTodo: () => {
    const wannadoId = getRecoil(activeWannadoIdState);
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
  uncompleteTodo: () => {
    const wannadoId = getRecoil(activeWannadoIdState);
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
  addTodo: () => {
    const wannadoId = getRecoil(activeWannadoIdState);
    setRecoil(wannadoOverviewAllState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        const wannado = draft.find(w => w.id === wannadoId);
        if (!wannado) return;
        wannado.uncompletedTodoCount = wannado.uncompletedTodoCount + 1;
      });
    });
  },
  removeTodo: () => {
    const wannadoId = getRecoil(activeWannadoIdState);
    setRecoil(wannadoOverviewAllState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        const wannado = draft.find(w => w.id === wannadoId);
        if (!wannado) return;
        wannado.uncompletedTodoCount = wannado.uncompletedTodoCount - 1;
      });
    });
  },
  addMemo: () => {
    const wannadoId = getRecoil(activeWannadoIdState);
    setRecoil(wannadoOverviewAllState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        const wannado = draft.find(w => w.id === wannadoId);
        if (!wannado) return;
        wannado.memoCount = wannado.memoCount + 1;
      });
    });
  },
  removeMemo: () => {
    const wannadoId = getRecoil(activeWannadoIdState);
    setRecoil(wannadoOverviewAllState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        const wannado = draft.find(w => w.id === wannadoId);
        if (!wannado) return;
        wannado.memoCount = wannado.memoCount - 1;
      });
    });
  },
  addLink: () => {
    const wannadoId = getRecoil(activeWannadoIdState);
    setRecoil(wannadoOverviewAllState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        const wannado = draft.find(w => w.id === wannadoId);
        if (!wannado) return;
        wannado.linkCount = wannado.linkCount + 1;
      });
    });
  },
  removeLink: () => {
    const wannadoId = getRecoil(activeWannadoIdState);
    setRecoil(wannadoOverviewAllState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        const wannado = draft.find(w => w.id === wannadoId);
        if (!wannado) return;
        wannado.linkCount = wannado.linkCount - 1;
      });
    });
  },
};
