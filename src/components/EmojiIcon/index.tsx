import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Text} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';

type Props = {
  emoji: string;
  onPress: () => void;
  size: number;
};
export const EmojiIcon = ({emoji, onPress, size = 28}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {emoji === '' ? (
        <Entypo name="emoji-happy" size={size} color="black" />
      ) : (
        <Text fontSize={size}>{emoji}</Text>
      )}
    </TouchableOpacity>
  );
};
