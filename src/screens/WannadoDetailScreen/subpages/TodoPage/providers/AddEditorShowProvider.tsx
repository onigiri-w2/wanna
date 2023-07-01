import React, {createContext} from 'react';

import {useModal} from '@/hooks/useModal';

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
  const {isModalVisible, showModal, hideModal} = useModal();
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
