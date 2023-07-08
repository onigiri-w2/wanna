import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Text} from 'native-base';
import {
  RenderItemParams,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';

import {WannadoOverview} from '@/domain/types';
import {useRootNavigator} from '@/navigations/hooks/useNavigator';
import {BORDER_RADIUS, FONT_SIZE_NORMAL, MAIN_COLOR} from '@/styles/const';

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
        <Text
          flex={1}
          fontSize={FONT_SIZE_NORMAL}
          px={4}
          py={3}
          bg="white"
          borderRadius={BORDER_RADIUS}
          borderColor={MAIN_COLOR}
          borderWidth={1}
          mb={2}>
          {item.title}
        </Text>
      </TouchableOpacity>
    </ScaleDecorator>
  );
};
