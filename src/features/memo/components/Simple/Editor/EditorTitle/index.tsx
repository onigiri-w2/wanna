import {useEffect, useRef} from 'react';
import {StyleSheet} from 'react-native';

import {Input, Text} from 'native-base';

const FONT_WEIGHT = 'bold';
const FONT_COLOR = '#333';
const FONT_SIZE = 16;
const PLACEHOLDER_COLOR = '#aaa';
const PLACEHOLDER = 'タイトル';

type TitleProps = {
  title?: string;
  editable: boolean;
  onTouchView: () => void;
  onChangeTitle: (title: string) => void;
  isFocused: boolean;
};
export const EditorTitle = ({
  title,
  editable,
  onTouchView,
  isFocused,
  onChangeTitle,
}: TitleProps) => {
  const inputRef = useRef<any>(null);
  useEffect(() => {
    if (isFocused) {
      inputRef.current?.focus();
    }
  }, [isFocused]);

  return editable ? (
    <Input
      ref={inputRef}
      value={title}
      my={0}
      pt="4px"
      lineHeight={FONT_SIZE}
      letterSpacing={0}
      px={0}
      placeholder={PLACEHOLDER}
      placeholderTextColor={PLACEHOLDER_COLOR}
      borderWidth={0}
      borderColor="white"
      color={FONT_COLOR}
      fontWeight={FONT_WEIGHT}
      fontSize={FONT_SIZE}
      _focus={styles.inputFocused}
      multiline
      blurOnSubmit
      onChangeText={onChangeTitle}
    />
  ) : (
    <Text
      my={0}
      py="4px"
      px={0}
      lineHeight={FONT_SIZE}
      letterSpacing={0}
      fontSize={FONT_SIZE}
      fontWeight={FONT_WEIGHT}
      color={title ? FONT_COLOR : PLACEHOLDER_COLOR}
      flexWrap="wrap"
      onPress={onTouchView}>
      {title || PLACEHOLDER}
    </Text>
  );
};

const styles = StyleSheet.create({
  inputFocused: {
    backgroundColor: 'white',
    borderWidth: 0,
    borderColor: 'white',
  },
  textAreaFocused: {
    backgroundColor: 'red',
    borderColor: 'white',
  },
});
