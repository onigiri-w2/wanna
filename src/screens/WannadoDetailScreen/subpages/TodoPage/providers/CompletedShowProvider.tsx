import React, {createContext, useContext} from 'react';

import {useShow} from '@/hooks/useShow';

type ProviderProps = {
  children: React.ReactNode;
};
type ContextProps = {
  isModalVisible: boolean;
  showModal: () => void;
  hideModal: () => void;
};

export const CompletedShowContext = createContext<ContextProps>({
  isModalVisible: false,
  showModal: () => {},
  hideModal: () => {},
});
export const CompletedShowProvider = ({children}: ProviderProps) => {
  const {isShow: isModalVisible, show: showModal, hide: hideModal} = useShow();
  return (
    <CompletedShowContext.Provider
      value={{
        isModalVisible,
        showModal,
        hideModal,
      }}>
      {children}
    </CompletedShowContext.Provider>
  );
};
export const useCompletedShowContext = () => useContext(CompletedShowContext);
