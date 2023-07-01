import {createContext, useEffect} from 'react';

import {useRecoilState} from 'recoil';

import {getWannadoAll} from '@/domain/usecase/wannado';
import {wannadoAllState} from '@/recoil/states/wannadoOverview/states';

/**
 * Recoilのdefault値の設定方法に苦戦してるので、一旦これで対応
 * TODO: Recoilだけで初期値を設定できるようにしようね...
 */
type ProviderProps = {
  children: React.ReactNode;
};
const WannadoInitLoadContext = createContext({});
export const WannadoInitLoadProvider = ({children}: ProviderProps) => {
  const [wannadoList, setWannadoList] = useRecoilState(wannadoAllState);
  useEffect(() => {
    const fetchWannadoList = async () => {
      const response = await getWannadoAll();
      setWannadoList(response);
    };
    fetchWannadoList();
  }, []);
  return (
    <WannadoInitLoadContext.Provider value={{}}>
      {children}
    </WannadoInitLoadContext.Provider>
  );
};
