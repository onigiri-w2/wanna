import {useEffect, useState} from 'react';

import {View, Text, HStack, Input} from 'native-base';

import {MainButton} from '@/components/MainButton';
import {ACCENT_COLOR} from '@/styles/const';

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
          <Text fontSize={16} fontWeight="bold">
            タイトル
          </Text>
          <Text
            ml={3}
            fontSize={14}
            underline
            onPress={handlePressEdit}
            color={ACCENT_COLOR}>
            編集する
          </Text>
        </HStack>
        {editable ? (
          <Input
            fontSize={16}
            ml={3}
            value={title}
            onChangeText={setTitle}
            multiline
          />
        ) : (
          <Text fontSize={16} ml={3}>
            {title}
          </Text>
        )}
      </View>
      <View mb={8}>
        <Text fontSize={16} mb={2} fontWeight="bold">
          URL
        </Text>
        <Text fontSize={16} ml={3} numberOfLines={1}>
          {url}
        </Text>
      </View>
      <HStack justifyContent="center" space={2}>
        <MainButton onPress={handlePressAdd} text="追加" />
      </HStack>
    </View>
  );
};
