import React from 'react';
import {StyleSheet} from 'react-native';

import {Box, Text, HStack} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {MemoSerialized} from '@/domain/model/entity/memo';
import {ACCENT_COLOR, BORDER_RADIUS} from '@/styles/const';

type MemoItemProps = {
  memo: MemoSerialized;
  onPressDelete: (memoId: string) => void;
  onPressEdit: (memoId: string) => void;
  bgColor?: string;
};
export const MemoItem = ({
  memo,
  onPressDelete: onDelete,
  onPressEdit,
  bgColor = 'white',
}: MemoItemProps) => {
  const [isWide, setIsWide] = React.useState(false);
  const handlePressDelete = () => {
    onDelete(memo.id);
  };
  const handlePressEdit = () => {
    onPressEdit(memo.id);
  };
  const handlePressBody = () => {
    setIsWide(!isWide);
  };

  return (
    <Box borderRadius={BORDER_RADIUS} bg={bgColor} style={styles.memoItem}>
      <HStack
        mb={2}
        space={4}
        justifyContent="flex-end"
        style={[styles.navigator, isWide && styles.navigatorShow]}>
        <TouchableOpacity onPress={handlePressDelete}>
          <Box bg="red.500" borderRadius={BORDER_RADIUS} p={1}>
            <MaterialCommunityIcons name="delete" size={20} color="white" />
          </Box>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePressEdit}>
          <Box bg={ACCENT_COLOR} borderRadius={BORDER_RADIUS} p={1}>
            <Entypo name="edit" size={20} color="white" />
          </Box>
        </TouchableOpacity>
      </HStack>
      <TouchableOpacity
        activeOpacity={1}
        onPress={handlePressBody}
        style={{
          padding: 16,
        }}>
        <Text fontSize={16} mb={2} fontWeight="bold" color="#333">
          {memo.title}
        </Text>
        <Text
          fontSize={14}
          fontWeight="normal"
          color="#333"
          numberOfLines={isWide ? undefined : 3}>
          {memo.content}
        </Text>
      </TouchableOpacity>
    </Box>
  );
};

const styles = StyleSheet.create({
  memoItem: {
    position: 'relative',
  },
  navigator: {
    position: 'absolute',
    right: 0,
    display: 'none',
    paddingHorizontal: 16,
    paddingVertical: 12,
    zIndex: 1,
  },
  navigatorShow: {
    display: 'flex',
  },
});
