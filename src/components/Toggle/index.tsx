import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import {View, Text, HStack} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {commonStyles} from '@/styles/commonRNStyles';
import {FONT_SIZE_SMALL} from '@/styles/const';

const FONT_SIZE = FONT_SIZE_SMALL;
type Props = {
  message: string;
  px?: number;
  fontSize?: number;
  children: React.ReactNode;
};
export const Toggle = ({
  message,
  children,
  px = 4,
  fontSize = FONT_SIZE,
}: Props) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <View style={commonStyles.flex1}>
      <TouchableOpacity onPress={() => setIsShow(!isShow)}>
        <HStack alignItems="center" py={1} px={px}>
          <Text mr="auto" fontSize={fontSize}>
            {message}
          </Text>
          <MaterialIcons
            name={isShow ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
            size={FONT_SIZE + 8}
          />
        </HStack>
      </TouchableOpacity>
      <View px={px} style={!isShow && styles.displayNone}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  displayNone: {
    display: 'none',
  },
});
