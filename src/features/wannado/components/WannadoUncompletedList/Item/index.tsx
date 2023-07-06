import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Text, HStack} from 'native-base';
import {
  RenderItemParams,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';

import {WannadoOverview} from '@/domain/types';
import {useRootNavigator} from '@/navigations/hooks/useNavigator';
import {FONT_SIZE_NORMAL} from '@/styles/const';

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
        <HStack alignItems="center" px={2} py={3}>
          <Text fontSize={20} ml="4px">
            {item.emoji}
          </Text>
          <Text flex={1} fontSize={FONT_SIZE_NORMAL} ml={2} px={2}>
            {item.title}
          </Text>
        </HStack>
      </TouchableOpacity>
    </ScaleDecorator>
  );
};
