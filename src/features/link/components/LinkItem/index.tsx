import React from 'react';
import {Linking} from 'react-native';

import {HStack, Text} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {LinkSerialized} from '@/domain/model/entity/link';
import {BORDER_RADIUS} from '@/styles/const';

type Props = {
  link: LinkSerialized;
  onPressDelete: (linkId: string) => void;
};
export const LinkItem = ({link, onPressDelete}: Props) => {
  const handlePressDelete = () => {
    onPressDelete(link.id);
  };
  return (
    <HStack p={4} bg="white" borderRadius={BORDER_RADIUS} alignItems="center">
      <Text
        onPress={() => {
          Linking.openURL(link.url);
        }}
        flex={1}
        mr="auto"
        pr={2}
        fontSize={16}
        fontWeight="bold"
        color="blue.600"
        underline>
        {link.title}
      </Text>

      <AntDesign
        name="close"
        size={20}
        onPress={handlePressDelete}
        color="#999"
      />
    </HStack>
  );
};
