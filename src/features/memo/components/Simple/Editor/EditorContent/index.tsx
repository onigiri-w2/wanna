import {useRef, useEffect} from 'react';
import {StyleSheet} from 'react-native';

import {Input, Text} from 'native-base';

const FONT_SIZE = 14;
const FONT_COLOR = '#333';
const PLACEHOLDER_COLOR = '#888';

type ContentProps = {
  content?: string;
  editable: boolean;
  onTouchView: () => void;
  onChangeContent: (content: string) => void;
  isFocused: boolean;
};
export const EditorContent = ({
  content,
  editable,
  onTouchView,
  onChangeContent,
  isFocused,
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
      px={0}
      py={0}
      minH="100%"
      placeholder="メモを入力してください"
      borderWidth={0}
      borderColor="white"
      lineHeight={FONT_SIZE}
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
      px={0}
      pt="4px"
      pb={0}
      minH="100%"
      fontSize={FONT_SIZE}
      lineHeight={FONT_SIZE}
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
