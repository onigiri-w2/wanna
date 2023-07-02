import {useRef, useEffect} from 'react';
import {StyleSheet} from 'react-native';

import {Input, Text} from 'native-base';

import {
  FONT_COLOR_LIGHT,
  FONT_COLOR_NORMAL,
  FONT_SIZE_NORMAL,
} from '@/styles/const';

const FONT_SIZE = FONT_SIZE_NORMAL;
const LINE_HEIGHT = FONT_SIZE * 1.5;
const FONT_COLOR = FONT_COLOR_NORMAL;
const PLACEHOLDER_COLOR = FONT_COLOR_LIGHT;

type ContentProps = {
  content?: string;
  editable: boolean;
  onTouchView: () => void;
  onChangeContent: (content: string) => void;
  isFocused: boolean;
  px: number;
};
export const EditorContent = ({
  content,
  editable,
  onTouchView,
  onChangeContent,
  isFocused,
  px,
}: ContentProps) => {
  const inputRef = useRef<any>(null);
  useEffect(() => {
    if (isFocused) {
      inputRef.current?.focus();
    }
  }, [isFocused]);

  return editable ? (
    <Input
      ref={inputRef}
      value={content}
      mt={0}
      mb={4}
      px={px}
      pt={0}
      minH="100%"
      placeholder="メモを入力してください"
      borderWidth={0}
      borderColor="white"
      lineHeight={LINE_HEIGHT}
      letterSpacing={0}
      color={FONT_COLOR}
      fontSize={FONT_SIZE}
      placeholderTextColor={PLACEHOLDER_COLOR}
      _focus={styles.inputFocused}
      multiline
      scrollEnabled={false}
      onChangeText={onChangeContent}
    />
  ) : (
    <Text
      mt={0}
      mb={4}
      px={px}
      pt="6px"
      pb={0}
      minH="100%"
      fontSize={FONT_SIZE}
      lineHeight={LINE_HEIGHT}
      letterSpacing={0}
      color={content ? FONT_COLOR : PLACEHOLDER_COLOR}
      flexWrap="wrap"
      onPress={onTouchView}>
      {content || 'メモを入力してください'}
    </Text>
  );
};

const styles = StyleSheet.create({
  inputFocused: {
    backgroundColor: 'white',
    borderWidth: 0,
    borderColor: 'white',
  },
});
