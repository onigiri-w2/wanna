import React, {createContext, useContext} from 'react';

import {useModal} from '@/hooks/useModal';

type ProviderProps = {
  children: React.ReactNode;
};
type ContextProps = {
  isModalVisible: boolean;
  showModal: () => void;
  hideModal: () => void;
};

export const UpdateEditorShowContext = createContext<ContextProps>({
  isModalVisible: false,
  showModal: () => {},
  hideModal: () => {},
});
export const UpdateEditorShowProvider = ({children}: ProviderProps) => {
  const {isModalVisible, showModal, hideModal} = useModal();
  return (
    <UpdateEditorShowContext.Provider
      value={{
        isModalVisible,
        showModal,
        hideModal,
      }}>
      {children}
    </UpdateEditorShowContext.Provider>
  );
};
export const useUpdateEditorShowContext = () =>
  useContext(UpdateEditorShowContext);
