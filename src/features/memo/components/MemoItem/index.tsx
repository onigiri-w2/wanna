import React from 'react';
import {StyleSheet} from 'react-native';

import {Box} from 'native-base';

import {MemoSerialized} from '@/domain/model/entity/memo';
import {BORDER_RADIUS} from '@/styles/const';

import {Body} from './Body';
import {Nav} from './Nav';

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
