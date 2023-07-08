import {setRecoil} from 'recoil-nexus';

import * as usecase from '@/domain/usecase/wannado';

import {wannadoOrderState, wannadoOverviewAllState} from './states';

export const wannadoOverviewAllActions = {
  addWannado: async (title: string) => {
    const wannado = await usecase.createWannado(title);
    if (!wannado) return;
    setRecoil(wannadoOverviewAllState, prev => {
      if (!prev) return prev;
      return [...prev, wannado];
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
};
