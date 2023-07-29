import React from 'react';
import {
  StyleSheet,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';

import {Box, Flex, HStack, Input} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {MainButton} from '@/components/MainButton';
import {Modal} from '@/components/Modal';
import {MAX_WANNADO_TITLE_LENGTH} from '@/domain/model/entity/wannado/valueobject/title';
import {LinkAddr} from '@/features/link/components/LinkAddr';
import {useShow} from '@/hooks/useShow';
import {wannadoAllActions} from '@/recoil/actions/wannadoAllActions';
import {
  ACCENT_COLOR,
  ADD_FORM_HEIGHT,
  ADD_FORM_PADDING,
  BORDER_RADIUS,
  FONT_SIZE_LARGE,
  FONT_SIZE_NORMAL,
  MAIN_COLOR,
  MAIN_COLOR_VERY_LIGHT,
} from '@/styles/const';

export const AddWannadoForm = () => {
  const [title, setTitle] = React.useState('');
  const [linkTitle, setLinkTitle] = React.useState('');
  const [linkUrl, setLinkUrl] = React.useState('');

  const handlePressAdd = async () => {
    if (!title) return;
    wannadoAllActions.addWannado(title, {title: linkTitle, url: linkUrl});
    setTitle('');
  };

  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setTitle(e.nativeEvent.text);
  };

  const handlePressLink = (title: string, url: string) => {
    setLinkTitle(title);
    setLinkUrl(url);
  };

  return (
    <Box p={`${ADD_FORM_PADDING}px`} justifyContent="center">
      <HStack mb={4}>
        <LinkAddrSwitcher
          onAdd={handlePressLink}
          initialTitle={linkTitle}
          initialUrl={linkUrl}
        />
      </HStack>
      <Flex direction="row" alignItems="center">
        <Box flex={1} mr={4}>
          <Input
            bg="white"
            value={title}
            onChange={handleChange}
            borderRadius={BORDER_RADIUS}
            h={`${ADD_FORM_HEIGHT}px`}
            fontSize={FONT_SIZE_NORMAL}
            _focus={styles.inputFocused}
            blurOnSubmit={false}
            onSubmitEditing={handlePressAdd}
            returnKeyType="done"
            autoFocus
            maxLength={MAX_WANNADO_TITLE_LENGTH}
          />
        </Box>
        <MainButton onPress={handlePressAdd} text="追加" disabled={!title} />
      </Flex>
    </Box>
  );
};

const styles = StyleSheet.create({
  inputFocused: {
    backgroundColor: MAIN_COLOR_VERY_LIGHT,
    borderColor: MAIN_COLOR,
  },
});

type LinkAddrSwitcherProps = {
  onAdd: (title: string, url: string) => void;
  initialTitle?: string;
  initialUrl?: string;
};
const LinkAddrSwitcher = ({
  onAdd,
  initialTitle,
  initialUrl,
}: LinkAddrSwitcherProps) => {
  const {isShow, show, hide} = useShow();
  const isSetLink = !!initialUrl;

  const handleAdd = (title: string, url: string) => {
    onAdd(title, url);
    hide();
  };

  return (
    <Box>
      <Box>
        <TouchableOpacity onPress={show}>
          <Fontisto
            name="link"
            size={FONT_SIZE_LARGE}
            color={isSetLink ? ACCENT_COLOR : 'gray'}
          />
        </TouchableOpacity>
      </Box>
      {isShow && (
        <Modal isOpen={isShow} close={hide}>
          <LinkAddr
            onAdd={handleAdd}
            initialTitle={initialTitle}
            initialUrl={initialUrl}
            addMessage="保存"
          />
        </Modal>
      )}
    </Box>
  );
};
