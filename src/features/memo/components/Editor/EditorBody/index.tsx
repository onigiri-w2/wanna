import React from 'react';
import {Pressable, ScrollView, StyleSheet} from 'react-native';

import {Input, Text, View} from 'native-base';

import {
  FONT_SIZE_NORMAL,
  ACCENT_COLOR_VERY_LIGHT,
  FONT_COLOR_NORMAL,
  FONT_SIZE_LARGE,
} from '@/styles/const';

type Props = {
  data: string;
  isEditable: boolean;
  onChangeText: (text: string) => void;
  onTouchText: () => void;
};
export const EditorBody = ({
  data,
  isEditable,
  onChangeText,
  onTouchText,
}: Props) => {
  return (
    <View flex={1}>
      {isEditable ? (
        <InputComponent data={data} onChangeText={onChangeText} />
      ) : (
        <TextComponent data={data} onTouchText={onTouchText} />
      )}
    </View>
  );
};

type InputComponentProps = {
  data: string;
  onChangeText: (text: string) => void;
};
const InputComponent = ({data, onChangeText}: InputComponentProps) => {
  return (
    <Input
      flex={1}
      py={1}
      px={2}
      value={data}
      onChangeText={onChangeText}
      multiline
      textAlignVertical="top"
      fontSize={FONT_SIZE_NORMAL}
      fontWeight={400}
      color={FONT_COLOR_NORMAL}
      lineHeight={FONT_SIZE_NORMAL * 1.6}
      letterSpacing={1}
      borderWidth={0}
      borderRadius={0}
      bg={ACCENT_COLOR_VERY_LIGHT}
      _focus={styles.inputFocus}
      autoFocus
    />
  );
};

type TextComponentProps = {
  data: string;
  onTouchText: () => void;
};
const TextComponent = ({data, onTouchText}: TextComponentProps) => {
  const title = data.split('\n')[0];
  const content = data.split('\n').slice(1).join('\n');
  return (
    <>
      {data === '' ? (
        <Pressable style={{flex: 1}} onPress={onTouchText}>
          <Text p={2}>メモを入力してください</Text>
        </Pressable>
      ) : (
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}>
          <Pressable
            style={{
              flex: content === '' ? 1 : 0,
            }}
            onPress={onTouchText}>
            <Text
              pb={content === '' ? 40 : 0}
              fontSize={FONT_SIZE_LARGE}
              fontWeight={700}
              color={FONT_COLOR_NORMAL}
              letterSpacing={1}>
              {title}
            </Text>
          </Pressable>
          <Pressable style={{flex: 1}} onPress={onTouchText}>
            <Text
              pb={40}
              fontSize={FONT_SIZE_NORMAL}
              color={FONT_COLOR_NORMAL}
              letterSpacing={1}
              lineHeight={FONT_SIZE_NORMAL * 1.6}
              fontWeight={400}>
              {content}
            </Text>
          </Pressable>
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  inputFocus: {
    backgroundColor: ACCENT_COLOR_VERY_LIGHT,
  },
  scrollView: {
    flex: 1,
    padding: 8,
    backgroundColor: 'white',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});
