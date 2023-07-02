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

export const UpdateEditorShowContext = createContext<ContextProps>({
  isModalVisible: false,
  showModal: () => {},
  hideModal: () => {},
});
export const UpdateEditorShowProvider = ({children}: ProviderProps) => {
  const {isShow: isModalVisible, show: showModal, hide: hideModal} = useShow();
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
