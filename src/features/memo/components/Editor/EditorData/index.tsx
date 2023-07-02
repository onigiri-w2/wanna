import React, {useRef} from 'react';
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

type Props = {
  px: number;
  editable: boolean;
  onTouchView: () => void;
  onChangeContent: (content: string) => void;
  data: string;
  title: string;
  content: string;
};

export const EditorData = ({
  px,
  editable,
  data,
  title,
  content,
  onTouchView,
  onChangeContent,
}: Props) => {
  const inputRef = useRef<any>(null);
  const handleChange = (text: string) => {
    onChangeContent(text);
  };

  return (
    <>
      {editable ? (
        <Input
          ref={inputRef}
          value={data}
          mt={0}
          mb={4}
          px={px}
          pt={0}
          minH="100%"
          placeholder="メモを入力してください"
          textAlignVertical="top"
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
          onChangeText={handleChange}
          autoFocus
        />
      ) : (
        <>
          {data ? (
            <Data
              title={title}
              content={content}
              px={px}
              onTouchView={onTouchView}
            />
          ) : (
            <EmptyData px={px} onTouchView={onTouchView} />
          )}
        </>
      )}
    </>
  );
};

type DataProps = {
  title: string;
  content: string;
  px: number;
  onTouchView: () => void;
};
const Data = ({title, content, px, onTouchView}: DataProps) => {
  return (
    <>
      <Text
        pt={4}
        px={px}
        lineHeight={FONT_SIZE}
        letterSpacing={0}
        fontSize={20}
        fontWeight="bold"
        color={FONT_COLOR}
        flexWrap="wrap"
        onPress={onTouchView}>
        {title}
      </Text>
      <Text
        mt={0}
        mb={4}
        px={px}
        py={0}
        minH="100%"
        fontSize={FONT_SIZE}
        lineHeight={LINE_HEIGHT}
        letterSpacing={0}
        color={FONT_COLOR}
        flexWrap="wrap"
        onPress={onTouchView}>
        {content}
      </Text>
    </>
  );
};

type EmptyDataProps = {
  px: number;
  onTouchView: () => void;
};
const EmptyData = ({px, onTouchView}: EmptyDataProps) => {
  return (
    <Text
      pt={4}
      px={px}
      lineHeight={FONT_SIZE}
      minH="100%"
      letterSpacing={0}
      fontSize={16}
      color={PLACEHOLDER_COLOR}
      flexWrap="wrap"
      onPress={onTouchView}>
      メモを入力してください
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
