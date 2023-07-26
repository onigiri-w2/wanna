import React from 'react';
import {TouchableOpacity} from 'react-native';

import {HStack, Text} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Modal} from '@/components/Modal';
import {useShow} from '@/hooks/useShow';
import {activeWannadoActions} from '@/recoil/actions/activeWannadoActions';
import {FONT_SIZE_LARGE} from '@/styles/const';

import {ModalContent} from '../ModalContent';

type Props = {
  wannadoId: string;
  onUncomplete: () => void;
};
export const Uncomplete = ({wannadoId, onUncomplete}: Props) => {
  const {isShow, show, hide} = useShow();
  const handleUncompleteButtonPress = () => {
    show();
  };
  const handleUncomplete = async () => {
    activeWannadoActions.uncompleteWannado();
    onUncomplete();
    hide();
  };

  return (
    <>
      <TouchableOpacity onPress={handleUncompleteButtonPress}>
        <HStack py={1} alignItems="center">
          <MaterialIcons name="done" size={28} color="black" />
          <Text ml={2} fontSize={FONT_SIZE_LARGE - 2} fontWeight="bold">
            未完了に戻す
          </Text>
        </HStack>
      </TouchableOpacity>
      <Modal isOpen={isShow} close={hide}>
        <ModalContent
          message="本当に未完了に戻しますか？"
          onSubmit={handleUncomplete}
          close={hide}
        />
      </Modal>
    </>
  );
};
