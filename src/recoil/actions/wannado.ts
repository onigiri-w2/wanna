import {produce} from 'immer';
import {setRecoil} from 'recoil-nexus';

import * as usecase from '@/domain/usecase/wannado';

import {activeWannadoState} from '../states/activeWannado';
import {wannadoOverviewAllState} from '../states/wannadoOverview';

export const wannadoActions = {
  updateTitle: (wannadoId: string, title: string) => {
    usecase.updateWannadoTitle(wannadoId, title);
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
    usecase.updateWannadoEmoji(wannadoId, emoji);
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
    usecase.completeWannado(wannadoId);
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
    usecase.uncompleteWannado(wannadoId);
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
