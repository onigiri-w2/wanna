import {produce} from 'immer';
import {setRecoil} from 'recoil-nexus';

import {activeWannadoState} from '../states/activeWannado';
import {wannadoOverviewAllState} from '../states/wannadoOverview';

export const wannadoActions = {
  updateTitle: (wannadoId: string, title: string) => {
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
  updateEmoji: (wannadoId: string, emoji: string) => {
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return {
        ...prev,
        emoji,
      };
    });
    setRecoil(wannadoOverviewAllState, prev => {
      return produce(prev, draft => {
        const target = draft.find(w => w.id === wannadoId);
        if (!target) return;
        target.emoji = emoji;
      });
    });
  },
  complete: (wannadoId: string) => {
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return {
        ...prev,
        isCompleted: true,
      };
    });
    setRecoil(wannadoOverviewAllState, prev => {
      return produce(prev, draft => {
        const target = draft.find(w => w.id === wannadoId);
        if (!target) return;
        target.isCompleted = true;
      });
    });
  },
  uncomplete: (wannadoId: string) => {
    setRecoil(activeWannadoState, prev => {
      if (!prev) return prev;
      return {
        ...prev,
        isCompleted: false,
      };
    });
    setRecoil(wannadoOverviewAllState, prev => {
      return produce(prev, draft => {
        const target = draft.find(w => w.id === wannadoId);
        if (!target) return;
        target.isCompleted = false;
      });
    });
  },
};
