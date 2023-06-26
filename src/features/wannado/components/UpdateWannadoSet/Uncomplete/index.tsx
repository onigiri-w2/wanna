import React from 'react';
import {TouchableOpacity} from 'react-native';

import {HStack, Text} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Modal} from '@/components/Modal';
import {uncompleteWannado} from '@/domain/usecase/wannado';
import {useModal} from '@/hooks/useModal';

import {ModalContent} from '../ModalContent';

type Props = {
  wannadoId: string;
  onUncomplete: () => void;
};
export const Uncomplete = ({wannadoId, onUncomplete}: Props) => {
  const {isModalVisible, showModal, hideModal} = useModal();
  const handleUncompleteButtonPress = () => {
    showModal();
  };
  const handleUncomplete = async () => {
    await uncompleteWannado(wannadoId);
    onUncomplete();
    hideModal();
  };

  return (
    <>
      <TouchableOpacity onPress={handleUncompleteButtonPress}>
        <HStack py={1} alignItems="center">
          <MaterialIcons name="done" size={24} />
          <Text ml={2} fontSize={16} fontWeight="bold">
            未完了に戻す
          </Text>
        </HStack>
      </TouchableOpacity>
      <Modal isOpen={isModalVisible} close={hideModal}>
        <ModalContent
          message="本当に未完了に戻しますか？"
          onSubmit={handleUncomplete}
          close={hideModal}
        />
      </Modal>
    </>
  );
};
