import {produce} from 'immer';
import {setRecoil} from 'recoil-nexus';

import {LinkSerialized} from '@/domain/model/entity/link';
import {MemoSerialized} from '@/domain/model/entity/memo';
import {TodoSerialized} from '@/domain/model/entity/todo';
import {getWannado} from '@/domain/usecase/wannado';

import {activeWannadoState} from './states';

export const activeWannadoActions = {
  // TODO: これ引数はWannadoSerializedにした方が一貫性ありそう。
  // 結局、recoilでまとめてrepositoryとやりとりするか、recoilの外でやるかの違い
  // どっちがいいだろう。
  // まとめてできる方が、UI側のコードが少なくて済むので、そっちの方がいいかも。
  // 今はまとめてないけど、まとめた方がいいかも。
  setActiveWannado: async (activeWannadoId: string) => {
    const wannado = await getWannado(activeWannadoId);
    if (wannado) setRecoil(activeWannadoState, wannado);
  },
  updateWannadoTitle: (title: string) => {
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return {...prev, title};
    });
  },
  updateWannadoEmoji: (emoji: string) => {
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return {...prev, emoji};
    });
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
  addTodo: async (todo: TodoSerialized) => {
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return {...prev, todos: [...prev.todos, todo]};
    });
  },
  deleteTodo: (todoId: string) => {
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        draft.todos = draft.todos.filter(t => t.id !== todoId);
      });
    });
  },
  updateTodoTitle: (todoId: string, title: string) => {
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
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        const todo = draft.todos.find(t => t.id === todoId);
        if (!todo) return;
        todo.isCompleted = false;
      });
    });
  },
  addMemo: (memo: MemoSerialized) => {
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return {...prev, memos: [...prev.memos, memo]};
    });
  },
  deleteMemo: (memoId: string) => {
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
  addLink: (link: LinkSerialized) => {
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return {...prev, links: [...prev.links, link]};
    });
  },
  deleteLink: (linkId: string) => {
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return produce(prev, draft => {
        draft.links = draft.links.filter(l => l.id !== linkId);
      });
    });
  },
};
