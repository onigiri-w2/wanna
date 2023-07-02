import {createContext, useContext} from 'react';

import {useShow} from '@/hooks/useShow';

type ProviderProps = {
  children: React.ReactNode;
};
type ContextProps = {
  isModalVisible: boolean;
  showModal: () => void;
  hideModal: () => void;
};
export const WannadoneModalContext = createContext<ContextProps>({
  isModalVisible: false,
  showModal: () => {},
  hideModal: () => {},
});
export const WannadoneModalProvider = ({children}: ProviderProps) => {
  const {isShow: isModalVisible, show: showModal, hide: hideModal} = useShow();
  return (
    <WannadoneModalContext.Provider
      value={{isModalVisible, showModal, hideModal}}>
      {children}
    </WannadoneModalContext.Provider>
  );
};
export const useWannadoneModalContext = () => useContext(WannadoneModalContext);
