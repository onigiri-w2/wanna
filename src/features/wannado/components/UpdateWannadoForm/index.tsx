import React from 'react';
import {StyleSheet} from 'react-native';

import {Box, Flex, Input} from 'native-base';

import {MAX_WANNADO_TITLE_LENGTH} from '@/domain/model/entity/wannado/valueobject/title';
import {
  BORDER_RADIUS,
  ACCENT_COLOR_VERY_LIGHT,
  FONT_SIZE_LARGE,
} from '@/styles/const';

import {useInput} from './hooks';

type Props = {
  wannadoId: string;
  initialTitle: string;
};

export const UpdateWannadoForm = ({wannadoId, initialTitle}: Props) => {
  const {title, handleInputChange} = useInput(initialTitle, wannadoId);

  return (
    <Box justifyContent="center">
      <Flex direction="row" alignItems="flex-start">
        <Box flex={1}>
          <Input
            value={title}
            onChange={handleInputChange}
            numberOfLines={1}
            multiline
            blurOnSubmit
            autoFocus
            style={styles.input}
            maxLength={MAX_WANNADO_TITLE_LENGTH}
          />
        </Box>
      </Flex>
    </Box>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: ACCENT_COLOR_VERY_LIGHT,
    borderRadius: BORDER_RADIUS,
    paddingHorizontal: 8,
    fontSize: FONT_SIZE_LARGE,
    textAlignVertical: 'auto',
    paddingTop: 6,
    paddingBottom: 6,
  },
});
