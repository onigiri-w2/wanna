import React from 'react';
import {Linking} from 'react-native';

import {HStack, Text} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useRecoilValue} from 'recoil';

import {LinkSerialized} from '@/domain/model/entity/link';
import * as usecase from '@/domain/usecase/link';
import {
  activeWannadoActions,
  activeWannadoIdState,
} from '@/recoil/states/activeWannado';
import {
  BORDER_RADIUS,
  FONT_SIZE_NORMAL,
  ICON_SIZE_NORMAL,
  LINK_COLOR,
} from '@/styles/const';

type Props = {
  link: LinkSerialized;
};
export const LinkItem = React.memo(({link}: Props) => {
  const wannadoId = useRecoilValue(activeWannadoIdState);
  const handlePressDelete = () => {
    usecase.deleteLink(wannadoId, link.id);
    activeWannadoActions.deleteLink(link.id);
  };
  const hanldePressText = () => {
    Linking.openURL(link.url);
  };

  return (
    <HStack p={4} bg="white" borderRadius={BORDER_RADIUS} alignItems="center">
      <Text
        onPress={hanldePressText}
        flex={1}
        mr="auto"
        pr={2}
        fontSize={FONT_SIZE_NORMAL}
        fontWeight="bold"
        color={LINK_COLOR}
        underline>
        {link.title}
      </Text>

      <AntDesign
        name="close"
        size={ICON_SIZE_NORMAL}
        onPress={handlePressDelete}
        color="#999"
      />
    </HStack>
  );
});
