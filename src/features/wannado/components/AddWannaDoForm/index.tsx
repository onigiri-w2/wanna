import React from 'react';
import {
  StyleSheet,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';

import {Box, Flex, Input} from 'native-base';

import {MainButton} from '@/components/MainButton';
import {MAX_WANNADO_TITLE_LENGTH} from '@/domain/model/entity/wannado/valueobject/title';
import {wannadoAllActions} from '@/recoil/actions/wannadoAllActions';
import {
  ADD_FORM_HEIGHT,
  ADD_FORM_PADDING,
  BORDER_RADIUS,
  FONT_SIZE_NORMAL,
  MAIN_COLOR,
  MAIN_COLOR_VERY_LIGHT,
} from '@/styles/const';

export const AddWannadoForm = () => {
  const [title, setTitle] = React.useState('');

  const handlePressAdd = async () => {
    if (!title) return;
    wannadoAllActions.addWannado(title);
    setTitle('');
  };

  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setTitle(e.nativeEvent.text);
  };

  return (
    <Box p={`${ADD_FORM_PADDING}px`} justifyContent="center">
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
