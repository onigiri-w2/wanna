import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';

import {Box, HStack, Text} from 'native-base';

import {Wannado} from '@/domain/entity/wannado';

type Props = {
  onPress: (wannaDo: Wannado) => void;
  wannaDo: Wannado;
};

export const WannaDo = ({onPress, wannaDo}: Props) => {
  // 多分、useCallback使ってた方がいい気がする。。。早すぎる最適化な気もする。。。
  const handlePress = useCallback(() => {
    onPress(wannaDo);
  }, [wannaDo, onPress]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <HStack h={16} space={4} px={4} alignItems="center">
        <Emoji value={wannaDo.emoji.emoji} />
        <Title value={wannaDo.title.title} />
      </HStack>
    </TouchableOpacity>
  );
};

const Emoji = ({value}: {value: string}) => {
  return (
    <Box>
      <Text fontSize={28}>{value}</Text>
    </Box>
  );
};

const Title = ({value}: {value: string}) => {
  return (
    <Box>
      <Text fontSize={20}>{value}</Text>
    </Box>
  );
};
