import React from 'react';
import {ActivityIndicator} from 'react-native';

import Clipboard from '@react-native-clipboard/clipboard';
import {Box, HStack, Input, Text} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {MainButton} from '@/components/MainButton';
import {MAX_LINK_TITLE_LENGTH} from '@/domain/model/entity/link/valueobject/title';
import {showFlashMessage} from '@/functions/flashMessageController';
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
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChangeTitle = (text: string) => {
    setTitle(text);
  };

  const handlePressDownload = async () => {
    setIsLoading(true);
    try {
      const title = await getTitleFromUrl(url);
      setTitle(title);
    } catch (error) {
      if (error instanceof FunctionException) {
        showFlashMessage(error.message, 'danger');
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
    <Box w="100%">
      <Box mb={8} w="100%">
        <Text mb={2} fontSize={FONT_SIZE}>
          タイトル
        </Text>
        <HStack alignItems="center" w="100%">
          <Input
            value={title}
            flex={1}
            mr={4}
            fontSize={FONT_SIZE}
            placeholder="空白の場合はURLがタイトル"
            onChangeText={handleChangeTitle}
            maxLength={MAX_LINK_TITLE_LENGTH}
            numberOfLines={1}
            multiline
            blurOnSubmit
            returnKeyType="done"
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
      </Box>
      <Box mb={12}>
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
            returnKeyType="done"
          />
          <FontAwesome5
            onPress={handlePressPaste}
            name="paste"
            size={28}
            color="#000"
          />
        </HStack>
      </Box>
      <MainButton
        onPress={handlePressAdd}
        text={addMessage}
        disabled={url === ''}
      />
    </Box>
  );
};
