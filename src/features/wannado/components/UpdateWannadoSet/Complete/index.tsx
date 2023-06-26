import React from 'react';
import {TouchableOpacity} from 'react-native';

import {HStack, Text} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Modal} from '@/components/Modal';
import {completeWannado} from '@/domain/usecase/wannado';
import {useModal} from '@/hooks/useModal';

import {ModalContent} from '../ModalContent';

type Props = {
  wannadoId: string;
  onComplete: () => void;
};
export const Complete = ({wannadoId, onComplete}: Props) => {
  const {isModalVisible, showModal, hideModal} = useModal();
  const handleCompleteButtonPress = () => {
    showModal();
  };
  const handleComplete = async () => {
    await completeWannado(wannadoId);
    onComplete();
    hideModal();
  };

  return (
    <>
      <TouchableOpacity onPress={handleCompleteButtonPress}>
        <HStack py={1} alignItems="center">
          <MaterialIcons name="done" size={24} />
          <Text ml={2} fontSize={16} fontWeight="bold">
            完了する
          </Text>
        </HStack>
      </TouchableOpacity>
      <Modal isOpen={isModalVisible} close={hideModal}>
        <ModalContent
          message="本当に完了にしますか？"
          onSubmit={handleComplete}
          close={hideModal}
        />
      </Modal>
    </>
  );
};
