import React, {createContext} from 'react';

import {useShow} from '@/hooks/useShow';

type ProviderProps = {
  children: React.ReactNode;
};
type ContextProps = {
  isModalVisible: boolean;
  showModal: () => void;
  hideModal: () => void;
};

export const AddEditorShowContext = createContext<ContextProps>({
  isModalVisible: false,
  showModal: () => {},
  hideModal: () => {},
});
export const AddEditorShowProvider = ({children}: ProviderProps) => {
  const {isShow: isModalVisible, show: showModal, hide: hideModal} = useShow();
  return (
    <AddEditorShowContext.Provider
      value={{
        isModalVisible,
        showModal,
        hideModal,
      }}>
      {children}
    </AddEditorShowContext.Provider>
  );
};

export const useAddEditorShowContext = () =>
  React.useContext(AddEditorShowContext);
