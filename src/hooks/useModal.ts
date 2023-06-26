import {useCallback, useState} from 'react';

export const useModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = useCallback(() => setIsModalVisible(true), []);
  const hideModal = useCallback(() => setIsModalVisible(false), []);
  return {
    isModalVisible,
    showModal,
    hideModal,
  };
};
