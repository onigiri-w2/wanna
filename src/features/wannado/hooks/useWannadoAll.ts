import {useState, useEffect} from 'react';

import {WannadoSerialized} from '@/domain/model/entity/wannado';
import {getWannadoAll} from '@/domain/usecase/wannado';

export const useWannadoAll = () => {
  const [wannadoList, setWannadoList] = useState<WannadoSerialized[]>([]);

  const fetchWannadoAll = async () => {
    const res = await getWannadoAll();
    setWannadoList(res || []);
  };

  const notifyReload = () => {
    fetchWannadoAll();
  };

  useEffect(() => {
    fetchWannadoAll();
  }, []);
  return {
    wannadoList,
    notifyReload,
  };
};
