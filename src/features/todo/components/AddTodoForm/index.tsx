import React from 'react';

import {Box, Flex, Input} from 'native-base';

import {MainButton} from '@/components/MainButton';
import {
  ADD_FORM_PADDING,
  BORDER_RADIUS,
  ADD_FORM_HEIGHT,
  MAIN_COLOR_VERY_LIGHT,
  MAIN_COLOR,
} from '@/styles/const';

import {useTextInput} from './hooks';

type Props = {
  onAdd: (title: string) => void;
};

export const AddTodoForm = React.memo(({onAdd}: Props) => {
  const {value: title, updateValue: updateTitle} = useTextInput();

  const handlePress = () => {
    updateTitle('');
    onAdd(title);
  };

  return (
    <Box p={`${ADD_FORM_PADDING}px`} justifyContent="center">
      <Flex direction="row" alignItems="center">
        <Box flex={1} bg="white" mr={4}>
          <Input
            value={title}
            onChange={e => updateTitle(e.nativeEvent.text)}
            borderRadius={BORDER_RADIUS}
            h={`${ADD_FORM_HEIGHT}px`}
            fontSize={16}
            _focus={{
              backgroundColor: MAIN_COLOR_VERY_LIGHT,
              borderColor: MAIN_COLOR,
            }}
          />
        </Box>
        <MainButton onPress={handlePress} h={ADD_FORM_HEIGHT} text="保存" />
      </Flex>
    </Box>
  );
});
