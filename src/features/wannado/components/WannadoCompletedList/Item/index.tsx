import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Text, Box, HStack} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {WannadoOverview} from '@/domain/types';
import {getJapanDateString} from '@/functions/getDateString';
import {
  FONT_SIZE_NORMAL,
  FONT_COLOR_LIGHT,
  FONT_SIZE_SMALL,
  BORDER_RADIUS,
  ACCENT_COLOR,
} from '@/styles/const';

type Props = {
  onPress: (wannado: WannadoOverview) => void;
  wannado: WannadoOverview;
};
export const WannadoListItem = ({onPress, wannado}: Props) => {
  const handlePress = () => {
    onPress(wannado);
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <Box
        bg="white"
        px={4}
        py={3}
        borderRadius={BORDER_RADIUS}
        borderColor={ACCENT_COLOR}
        borderWidth={1}
        mb={2}>
        <Text fontSize={FONT_SIZE_NORMAL} fontWeight="bold" mb={2}>
          {wannado.title}
        </Text>
        <SubInfo item={wannado} />
        <Text fontSize={FONT_SIZE_SMALL} color={FONT_COLOR_LIGHT}>
          達成日:{' '}
          {wannado.completedAt && getJapanDateString(wannado.completedAt)}
        </Text>
      </Box>
    </TouchableOpacity>
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
