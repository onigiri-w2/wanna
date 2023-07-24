import React from 'react';
import {Linking, TouchableOpacity, StyleSheet} from 'react-native';

import {HStack, Text} from 'native-base';
import {
  ScaleDecorator,
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {LinkSerialized} from '@/domain/model/entity/link';
import {activeWannadoActions} from '@/recoil/states/activeWannado';
import {wannadoOverviewAllActions} from '@/recoil/states/wannadoOverview';
import {
  BORDER_RADIUS,
  FONT_SIZE_NORMAL,
  ICON_SIZE_NORMAL,
  LINK_COLOR,
} from '@/styles/const';

export const LinkItem = ({
  item,
  drag,
  getIndex,
  isActive,
}: RenderItemParams<LinkSerialized>) => {
  const handlePressDelete = () => {
    activeWannadoActions.deleteLink(item.id);
    wannadoOverviewAllActions.removeLink();
  };
  const hanldePressText = () => {
    Linking.openURL(item.url);
  };

  return (
    <ScaleDecorator>
      <TouchableOpacity
        style={styles.linkItem}
        delayLongPress={200}
        onLongPress={drag}
        onPress={hanldePressText}
        disabled={isActive}>
        <HStack
          p={4}
          bg="white"
          borderRadius={BORDER_RADIUS}
          alignItems="center">
          <Text
            flex={1}
            mr="auto"
            pr={2}
            fontSize={FONT_SIZE_NORMAL}
            fontWeight="bold"
            color={LINK_COLOR}
            underline>
            {item.title}
          </Text>

          <AntDesign
            name="close"
            size={ICON_SIZE_NORMAL}
            onPress={handlePressDelete}
            color="#999"
          />
        </HStack>
      </TouchableOpacity>
    </ScaleDecorator>
  );
};

const styles = StyleSheet.create({
  linkItem: {
    marginBottom: 16,
  },
});
