import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Box} from 'native-base';
import {
  RenderItemParams,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';

import {MemoSerialized} from '@/domain/model/entity/memo';
import {editTargetMemoActions} from '@/recoil/states/editTargetMemo';
import {BORDER_RADIUS} from '@/styles/const';

import {Body} from './Body';
import {Nav} from './Nav';

export const MemoItem = ({
  item,
  drag,
  isActive,
  getIndex,
}: RenderItemParams<MemoSerialized>) => {
  const [isWide, setIsWide] = React.useState(false);
  const handlePressBody = () => {
    setIsWide(!isWide);
  };

  return (
    <ScaleDecorator>
      <TouchableOpacity
        style={styles.memoItem}
        delayLongPress={200}
        onLongPress={drag}
        activeOpacity={1}
        onPress={() => {
          editTargetMemoActions.setEditTarget(item);
        }}
        disabled={isActive}>
        <Box borderRadius={BORDER_RADIUS} bg="white">
          <Nav isMemoWide={isWide} memo={item} />
          <Body isMemoWide={isWide} memo={item} onPressBody={handlePressBody} />
        </Box>
      </TouchableOpacity>
    </ScaleDecorator>
  );
};

const styles = StyleSheet.create({
  memoItem: {
    position: 'relative',
    marginBottom: 16,
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
