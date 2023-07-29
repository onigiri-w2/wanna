import React from 'react';
import {ActivityIndicator} from 'react-native';

import Clipboard from '@react-native-clipboard/clipboard';
import {View, Text, Input, HStack} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {MainButton} from '@/components/MainButton';
import {MAX_LINK_TITLE_LENGTH} from '@/domain/model/entity/link/valueobject/title';
import {getTitleFromUrl} from '@/functions/getTitleFromUrl';
import {FONT_SIZE_NORMAL} from '@/styles/const';
import {FunctionException} from '@/utils/exceptions';

const FONT_SIZE = FONT_SIZE_NORMAL;

type Props = {
  onAdd: (title: string, url: string) => void;
  initialTitle?: string;
  initialUrl?: string;
  addMessage?: string;
};
export const LinkAddr = ({
  onAdd,
  initialTitle = '',
  initialUrl = '',
  addMessage = '追加',
}: Props) => {
  const [title, setTitle] = React.useState(initialTitle);
  const [url, setUrl] = React.useState(initialUrl);
  const [errorMsg, setErrorMsg] = React.useState<string | undefined>();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChangeTitle = (text: string) => {
    setTitle(text);
    setErrorMsg(undefined);
  };

  const handlePressDownload = async () => {
    setIsLoading(true);
    setErrorMsg(undefined);
    try {
      const title = await getTitleFromUrl(url);
      setTitle(title);
    } catch (error) {
      if (error instanceof FunctionException) {
        setErrorMsg(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handlePressPaste = async () => {
    const url = await Clipboard.getString();
    setUrl(url);
  };

  const handlePressAdd = () => {
    setUrl('');
    setTitle('');
    onAdd(title, url);
  };

  return (
    <View minW="90%">
      <View mb={6}>
        <Text mb={2} fontSize={FONT_SIZE}>
          タイトル
        </Text>
        <HStack alignItems="center">
          <Input
            value={title}
            flex={1}
            mr={4}
            fontSize={FONT_SIZE}
            placeholder="空白の場合はURLがタイトル"
            multiline
            onChangeText={handleChangeTitle}
            maxLength={MAX_LINK_TITLE_LENGTH}
          />
          {isLoading ? (
            <ActivityIndicator size="small" color="#000" />
          ) : (
            <AntDesign
              onPress={handlePressDownload}
              name="download"
              size={24}
              color="#000"
            />
          )}
        </HStack>
        <Text fontSize={FONT_SIZE} color="red.500">
          {errorMsg}
        </Text>
      </View>
      <View mb={12}>
        <Text mb={2} fontSize={FONT_SIZE}>
          URL
        </Text>
        <HStack alignItems="center">
          <Input
            value={url}
            flex={1}
            mr={4}
            fontSize={FONT_SIZE}
            placeholder="URLを入力"
            onChangeText={setUrl}
          />
          <FontAwesome5
            onPress={handlePressPaste}
            name="paste"
            size={28}
            color="#000"
          />
        </HStack>
      </View>
      <MainButton
        onPress={handlePressAdd}
        text={addMessage}
        disabled={url === ''}
      />
    </View>
  );
};
