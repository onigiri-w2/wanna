import React from 'react';
import {TouchableOpacity} from 'react-native';

import {HStack, Text} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Modal} from '@/components/Modal';
import {deleteWannado} from '@/domain/usecase/wannado';
import {useModal} from '@/hooks/useModal';
import {wannadoOverviewAllActions} from '@/recoil/states/wannadoOverview';

import {ModalContent} from '../ModalContent';

type Props = {
  wannadoId: string;
  onDelete: () => void;
};
export const Delete = ({wannadoId, onDelete}: Props) => {
  const {isModalVisible, showModal, hideModal} = useModal();
  const handleDeleteButtonPress = () => {
    showModal();
  };
  const handleDelete = async () => {
    deleteWannado(wannadoId);
    wannadoOverviewAllActions.deleteWannado(wannadoId);
    onDelete();
    hideModal();
  };

  return (
    <>
      <TouchableOpacity onPress={handleDeleteButtonPress}>
        <HStack py={1} alignItems="center">
          <MaterialCommunityIcons name="delete" size={24} />
          <Text ml={2} fontSize={16} fontWeight="bold">
            削除する
          </Text>
        </HStack>
      </TouchableOpacity>
      <Modal isOpen={isModalVisible} close={hideModal}>
        <ModalContent
          message="本当に削除しますか？"
          onSubmit={handleDelete}
          close={hideModal}
        />
      </Modal>
    </>
  );
};
