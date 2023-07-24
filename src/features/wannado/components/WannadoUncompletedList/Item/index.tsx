import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Box, HStack, Text} from 'native-base';
import {
  RenderItemParams,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {WannadoOverview} from '@/domain/types';
import {useRootNavigator} from '@/navigations/hooks/useNavigator';
import {
  BORDER_RADIUS,
  FONT_COLOR_LIGHT,
  FONT_SIZE_NORMAL,
  ACCENT_COLOR,
  FONT_SIZE_SMALL,
} from '@/styles/const';

export const WannadoListItem = ({
  item,
  isActive,
  drag,
  getIndex,
}: RenderItemParams<WannadoOverview>) => {
  const {navigateToWannadoDetail} = useRootNavigator();

  // TODO: ナビゲーション関数をこのコンポーネントで直接実行するのは流石に密結合すぎる...
  const handlePress = () => {
    navigateToWannadoDetail(item.id);
  };

  return (
    <ScaleDecorator>
      <TouchableOpacity
        delayLongPress={200}
        onLongPress={drag}
        onPress={handlePress}
        disabled={isActive}>
        <Box
          bg="white"
          px={4}
          py={3}
          borderRadius={BORDER_RADIUS}
          borderColor={ACCENT_COLOR}
          borderWidth={1}
          mb={2}>
          <Text fontSize={FONT_SIZE_NORMAL} fontWeight="bold" mb={2}>
            {item.title}
          </Text>
          <SubInfo item={item} />
        </Box>
      </TouchableOpacity>
    </ScaleDecorator>
  );
};

const SUB_INFO_FONT_SIZE = FONT_SIZE_SMALL;
const SubInfo = ({item}: {item: WannadoOverview}) => {
  return (
    <HStack alignItems="center">
      <FontAwesome5
        name="tasks"
        color={FONT_COLOR_LIGHT}
        style={{
          marginRight: 8,
          fontSize: SUB_INFO_FONT_SIZE,
        }}
      />
      <Text
        color={FONT_COLOR_LIGHT}
        style={{
          marginRight: 16,
          fontSize: SUB_INFO_FONT_SIZE,
        }}>
        {item.completedTodoCount}/
        {item.completedTodoCount + item.uncompletedTodoCount}
      </Text>
      <SimpleLineIcons
        name="note"
        color={FONT_COLOR_LIGHT}
        style={{
          marginRight: 8,
          fontSize: SUB_INFO_FONT_SIZE,
        }}
      />
      <Text
        color={FONT_COLOR_LIGHT}
        style={{
          marginRight: 16,
          fontSize: SUB_INFO_FONT_SIZE,
        }}>
        {item.memoCount}
      </Text>
      <AntDesign
        name="link"
        color={FONT_COLOR_LIGHT}
        style={{
          marginRight: 8,
          fontSize: SUB_INFO_FONT_SIZE,
        }}
      />
      <Text
        color={FONT_COLOR_LIGHT}
        style={{
          fontSize: SUB_INFO_FONT_SIZE,
        }}>
        {item.linkCount}
      </Text>
    </HStack>
  );
};
