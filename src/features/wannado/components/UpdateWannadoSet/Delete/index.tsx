import React from 'react';
import {TouchableOpacity} from 'react-native';

import {HStack, Text} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Modal} from '@/components/Modal';
import {useShow} from '@/hooks/useShow';
import {wannadoOverviewAllActions} from '@/recoil/states/wannadoOverview';
import {FONT_SIZE_LARGE} from '@/styles/const';

import {ModalContent} from '../ModalContent';

type Props = {
  wannadoId: string;
  onDelete: () => void;
};
export const Delete = ({wannadoId, onDelete}: Props) => {
  const {isShow, show, hide} = useShow();
  const handleDeleteButtonPress = () => {
    show();
  };
  const handleDelete = async () => {
    wannadoOverviewAllActions.deleteWannado(wannadoId);
    onDelete();
    hide();
  };

  return (
    <>
      <TouchableOpacity onPress={handleDeleteButtonPress}>
        <HStack py={1} alignItems="center">
          <MaterialCommunityIcons name="delete" size={28} color="black" />
          <Text ml={2} fontSize={FONT_SIZE_LARGE - 2} fontWeight="bold">
            削除する
          </Text>
        </HStack>
      </TouchableOpacity>
      <Modal isOpen={isShow} close={hide}>
        <ModalContent
          message="本当に削除しますか？"
          onSubmit={handleDelete}
          close={hide}
        />
      </Modal>
    </>
  );
};
