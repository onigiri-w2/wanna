import React from 'react';
import {TouchableOpacity} from 'react-native';

import {HStack, Text} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Modal} from '@/components/Modal';
import {useShow} from '@/hooks/useShow';
import {wannadoActions} from '@/recoil/actions/wannado';
import {FONT_SIZE_LARGE} from '@/styles/const';

import {ModalContent} from '../ModalContent';

type Props = {
  wannadoId: string;
  onComplete: () => void;
};
export const Complete = ({wannadoId, onComplete}: Props) => {
  const {isShow, show, hide} = useShow();
  const handleCompleteButtonPress = () => {
    show();
  };
  const handleComplete = async () => {
    wannadoActions.complete(wannadoId);
    onComplete();
    hide();
  };

  return (
    <>
      <TouchableOpacity onPress={handleCompleteButtonPress}>
        <HStack py={1} alignItems="center">
          <MaterialIcons name="done" size={28} color="black" />
          <Text ml={2} fontSize={FONT_SIZE_LARGE - 2} fontWeight="bold">
            完了する
          </Text>
        </HStack>
      </TouchableOpacity>
      <Modal isOpen={isShow} close={hide}>
        <ModalContent
          message="本当に完了にしますか？"
          onSubmit={handleComplete}
          close={hide}
        />
      </Modal>
    </>
  );
};
