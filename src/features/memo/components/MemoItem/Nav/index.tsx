import React from 'react';
import {StyleSheet} from 'react-native';

import {Box, HStack} from 'native-base';
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
import {ACCENT_COLOR, BORDER_RADIUS, ICON_SIZE_NORMAL} from '@/styles/const';

type NavProps = {
  isMemoWide: boolean;
  memo: MemoSerialized;
  onPressEdit: (memoId: string) => void;
};
export const Nav = ({isMemoWide, memo, onPressEdit}: NavProps) => {
  const wannadoId = useRecoilValue(activeWannadoIdState);
  const handlePressDelete = () => {
    usecase.deleteMemo(wannadoId, memo.id);
    activeWannadoActions.deleteMemo(memo.id);
  };
  const handlePressEdit = () => {
    onPressEdit(memo.id);
  };

  return (
    <HStack
      mb={2}
      space={4}
      justifyContent="flex-end"
      style={[styles.navigator, isMemoWide && styles.navigatorShow]}>
      <TouchableOpacity onPress={handlePressDelete}>
        <Box bg="red.500" borderRadius={BORDER_RADIUS} p={1}>
          <MaterialCommunityIcons
            name="delete"
            size={ICON_SIZE_NORMAL}
            color="white"
          />
        </Box>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePressEdit}>
        <Box bg={ACCENT_COLOR} borderRadius={BORDER_RADIUS} p={1}>
          <Entypo name="edit" size={ICON_SIZE_NORMAL} color="white" />
        </Box>
      </TouchableOpacity>
    </HStack>
  );
};

const styles = StyleSheet.create({
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
