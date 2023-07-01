import {atom} from 'recoil';

import {WannadoSerialized} from '@/domain/model/entity/wannado';

import {recoilKeyHashSet} from '../recoilKeys';

export const activeWannadoIdState = atom<string>({
  key: recoilKeyHashSet.activeWannadoId,
  default: '',
});

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
