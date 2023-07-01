import React from 'react';
import {StyleSheet} from 'react-native';

import {Box, Text, HStack} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useRecoilValue} from 'recoil';

import {MemoSerialized} from '@/domain/model/entity/memo';
import * as usecase from '@/domain/usecase/memo';
import {
  activeWannadoIdState,
  activeWannadoActions,
} from '@/recoil/states/activeWannado';
import {ACCENT_COLOR, BORDER_RADIUS} from '@/styles/const';

type MemoItemProps = {
  memo: MemoSerialized;
  onPressEdit: (memoId: string) => void;
};
export const MemoItem = React.memo(({memo, onPressEdit}: MemoItemProps) => {
  const [isWide, setIsWide] = React.useState(false);
  const handlePressBody = () => {
    setIsWide(!isWide);
  };

  return (
    <Box borderRadius={BORDER_RADIUS} bg="white" style={styles.memoItem}>
      <Nav isMemoWide={isWide} memo={memo} onPressEdit={onPressEdit} />
      <Body isMemoWide={isWide} memo={memo} onPressBody={handlePressBody} />
    </Box>
  );
});

type NavProps = {
  isMemoWide: boolean;
  memo: MemoSerialized;
  onPressEdit: (memoId: string) => void;
};
const Nav = ({isMemoWide, memo, onPressEdit}: NavProps) => {
  const wannadoId = useRecoilValue(activeWannadoIdState);
  const handlePressDelete = () => {
    usecase.deleteMemo(wannadoId, memo.id);
    activeWannadoActions.deleteMemo(memo.id);
  };

  return (
    <HStack
      mb={2}
      space={4}
      justifyContent="flex-end"
      style={[styles.navigator, isMemoWide && styles.navigatorShow]}>
      <TouchableOpacity onPress={handlePressDelete}>
        <Box bg="red.500" borderRadius={BORDER_RADIUS} p={1}>
          <MaterialCommunityIcons name="delete" size={20} color="white" />
        </Box>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPressEdit(memo.id)}>
        <Box bg={ACCENT_COLOR} borderRadius={BORDER_RADIUS} p={1}>
          <Entypo name="edit" size={20} color="white" />
        </Box>
      </TouchableOpacity>
    </HStack>
  );
};

type BodyProps = {
  memo: MemoSerialized;
  onPressBody: () => void;
  isMemoWide: boolean;
};
const Body = ({memo, onPressBody, isMemoWide}: BodyProps) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPressBody}
      style={styles.body}>
      <Text fontSize={16} mb={2} fontWeight="bold" color="#333">
        {memo.title}
      </Text>
      <Text
        fontSize={14}
        fontWeight="normal"
        color="#333"
        numberOfLines={isMemoWide ? undefined : 3}>
        {memo.content}
      </Text>
    </TouchableOpacity>
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
  body: {
    padding: 16,
  },
});
