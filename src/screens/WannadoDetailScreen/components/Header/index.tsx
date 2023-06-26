import React from 'react';

import {HStack, Box} from 'native-base';

import {UpdateWannadoForm} from '@/features/wannado/components/UpdateWannadoForm';
import {UpdateWannadoSet} from '@/features/wannado/components/UpdateWannadoSet';
import {useActiveWannadoContext} from '@/features/wannado/providers/ActiveWannadoProvider';
import {
  PAGE_HEADER_COLOR,
  PAGE_HEADER_HEIGHT,
  PAGE_HEADER_PADDING,
  MAIN_COLOR,
} from '@/styles/const';

import {Goback} from './GoBack';
import {useTitle, useEmoji, useShow, useWannadoUpdate} from './hooks';
import {Menu} from './Menu';
import {styles} from './styles';
import {Title} from './Title';

export const Header = () => {
  const {wannado} = useActiveWannadoContext();
  const {title, handleChangeTitle} = useTitle(wannado?.title || '');
  const {handleChangeEmoji} = useEmoji(wannado?.emoji || '');
  const {isShowEditor, isShowUpdator, handlePressMenu, handelPressTitle} =
    useShow();
  const {handleUpdate} = useWannadoUpdate();

  return (
    <>
      {wannado && (
        <>
          <HStack
            h={`${PAGE_HEADER_HEIGHT}px`}
            px={`${PAGE_HEADER_PADDING}px`}
            alignItems="center"
            bg={PAGE_HEADER_COLOR}>
            <Goback />
            <Title title={title} onPress={handelPressTitle} />
            <Menu onPress={handlePressMenu} />
          </HStack>
          <Box
            style={[styles.titleEmoji, isShowEditor && styles.showTitleEmoji]}>
            <UpdateWannadoForm
              wannadoId={wannado.id}
              initialEmoji={wannado.emoji}
              initialTitle={wannado.title}
              onChangeEmoji={handleChangeEmoji}
              onChangeTitle={handleChangeTitle}
            />
          </Box>
          <Box
            style={[styles.updator, isShowUpdator && styles.showUpdator]}
            bg={MAIN_COLOR}>
            <Box ml="auto" mr={5} mb={4}>
              <UpdateWannadoSet
                wannadoId={wannado.id}
                onUpdated={handleUpdate}
                isCompleted={wannado.isCompleted}
              />
            </Box>
          </Box>
        </>
      )}
    </>
  );
};
