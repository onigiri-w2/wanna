import {produce} from 'immer';
import {setRecoil, getRecoil} from 'recoil-nexus';

import * as linkUsecase from '@/domain/usecase/link';
import * as memoUsecase from '@/domain/usecase/memo';
import * as todoUsecase from '@/domain/usecase/todo';
import * as wannadoUsecase from '@/domain/usecase/wannado';

import {activeWannadoState} from './states';

export const activeWannadoActions = {
  // TODO: これ引数はWannadoSerializedにした方が一貫性ありそう。
  // 結局、recoilでまとめてrepositoryとやりとりするか、recoilの外でやるかの違い
  // どっちがいいだろう。
  // まとめてできる方が、UI側のコードが少なくて済むので、そっちの方がいいかも。
  // 今はまとめてないけど、まとめた方がいいかも。
  setActiveWannado: async (activeWannadoId: string) => {
    const wannado = await wannadoUsecase.getWannado(activeWannadoId);
    if (wannado) setRecoil(activeWannadoState, wannado);
  },
  completeWannado: () => {
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return {...prev, isCompleted: true};
    });
  },
  uncompletedWannado: () => {
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return {...prev, isCompleted: false};
    });
  },
  addTodo: async (title: string) => {
    const wannadoId = getRecoil(activeWannadoState)?.id;
    const todo = await todoUsecase.createTodo(wannadoId, title);
    if (!todo) return;
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return {...prev, todos: [...prev.todos, todo]};
    });
  },
  deleteTodo: (todoId: string) => {
    const wannadoId = getRecoil(activeWannadoState)?.id;
    todoUsecase.deleteTodo(wannadoId, todoId);
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        draft.todos = draft.todos.filter(t => t.id !== todoId);
      });
    });
  },
  updateTodoTitle: (todoId: string, title: string) => {
    const wannadoId = getRecoil(activeWannadoState)?.id;
    todoUsecase.updateTodoTitle(wannadoId, todoId, title);
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        const todo = draft.todos.find(t => t.id === todoId);
        if (!todo) return;
        todo.title = title;
      });
    });
  },
  completeTodo: (todoId: string) => {
    // TODO: 完了失敗したらどうするか考える
    const wannadoId = getRecoil(activeWannadoState)?.id;
    todoUsecase.completeTodo(wannadoId, todoId);
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        const todo = draft.todos.find(t => t.id === todoId);
        if (!todo) return;
        todo.isCompleted = true;
      });
    });
  },
  uncompleteTodo: (todoId: string) => {
    // TODO: 完了失敗したらどうするか考える
    const wannadoId = getRecoil(activeWannadoState)?.id;
    todoUsecase.uncompleteTodo(wannadoId, todoId);
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        const todo = draft.todos.find(t => t.id === todoId);
        if (!todo) return;
        todo.isCompleted = false;
      });
    });
  },
  addMemo: async (title: string, content: string) => {
    const wannadoId = getRecoil(activeWannadoState)?.id;
    const memo = await memoUsecase.createMemo(wannadoId, title, content);
    if (!memo) return;
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return {...prev, memos: [...prev.memos, memo]};
    });
  },
  deleteMemo: (memoId: string) => {
    // TODO: 削除失敗したらどうするか考える
    const wannadoId = getRecoil(activeWannadoState)?.id;
    memoUsecase.deleteMemo(wannadoId, memoId);
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        draft.memos = draft.memos.filter(m => m.id !== memoId);
      });
    });
  },
  updateMemoTitle: (memoId: string, title: string) => {
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        const memo = draft.memos.find(m => m.id === memoId);
        if (!memo) return;
        memo.title = title;
      });
    });
  },
  updateMemoContent: (memoId: string, content: string) => {
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        const memo = draft.memos.find(m => m.id === memoId);
        if (!memo) return;
        memo.content = content;
      });
    });
  },
  updateMemoTitleAndContent: (
    memoId: string,
    title: string,
    content: string,
  ) => {
    // TODO: アップデート失敗したらどうするか考える
    const wannadoId = getRecoil(activeWannadoState)?.id;
    memoUsecase.updateMemoTitle(wannadoId, memoId, title);
    memoUsecase.updateMemoContent(wannadoId, memoId, content);
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        const memo = draft.memos.find(m => m.id === memoId);
        if (!memo) return;
        memo.title = title;
        memo.content = content;
      });
    });
  },
  addLink: async (title: string, url: string) => {
    const wannadoId = getRecoil(activeWannadoState)?.id;
    const newLink = await linkUsecase.createLink(wannadoId, title, url);
    if (!newLink) return;
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return {...prev, links: [...prev.links, newLink]};
    });
  },
  deleteLink: (linkId: string) => {
    // TODO: deleteLinkが失敗したら状態変更は行わないようにした方がいいかも
    const wannadoId = getRecoil(activeWannadoState)?.id;
    linkUsecase.deleteLink(wannadoId, linkId);
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        draft.links = draft.links.filter(l => l.id !== linkId);
      });
    });
  },
};
