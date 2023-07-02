import {useEffect, useState} from 'react';

import {View, Text, HStack, Input} from 'native-base';

import {MainButton} from '@/components/MainButton';
import {ACCENT_COLOR, FONT_SIZE_NORMAL, FONT_SIZE_SMALL} from '@/styles/const';

import {getUrlTitle} from '../functions/getUrlTitle';

type Props = {
  url: string;
  onAdd: (title: string, url: string) => void;
};
export const Pasted = ({url, onAdd}: Props) => {
  const [title, setTitle] = useState('');
  const [editable, setEditable] = useState(false);

  const loadTitle = async () => {
    try {
      const title = await getUrlTitle(url);
      setTitle(title);
    } catch {
      setTitle('');
    }
  };
  const handlePressEdit = () => {
    setEditable(true);
  };
  const handlePressAdd = () => {
    onAdd(title, url);
  };

  useEffect(() => {
    loadTitle();
  }, [url]);

  return (
    <View>
      <View mb={4}>
        <HStack mb={2} alignItems="center">
          <Text fontSize={FONT_SIZE_NORMAL} fontWeight="bold">
            タイトル
          </Text>
          <Text
            ml={3}
            fontSize={FONT_SIZE_SMALL}
            underline
            onPress={handlePressEdit}
            color={ACCENT_COLOR}>
            編集する
          </Text>
        </HStack>
        {editable ? (
          <Input
            fontSize={FONT_SIZE_NORMAL}
            ml={3}
            value={title}
            onChangeText={setTitle}
            multiline
          />
        ) : (
          <Text fontSize={FONT_SIZE_NORMAL} ml={3}>
            {title}
          </Text>
        )}
      </View>
      <View mb={8}>
        <Text fontSize={FONT_SIZE_NORMAL} mb={2} fontWeight="bold">
          URL
        </Text>
        <Text fontSize={FONT_SIZE_NORMAL} ml={3} numberOfLines={1}>
          {url}
        </Text>
      </View>
      <HStack justifyContent="center" space={2}>
        <MainButton onPress={handlePressAdd} text="追加" />
      </HStack>
    </View>
  );
};
