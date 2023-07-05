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

// type MemoItemProps = {
//   memo: MemoSerialized;
//   onPressEdit: (memoId: string) => void;
// };
// export const MemoItem = React.memo(({memo, onPressEdit}: MemoItemProps) => {
//   const [isWide, setIsWide] = React.useState(false);
//   const handlePressBody = () => {
//     setIsWide(!isWide);
//   };

//   return (
//     <Box borderRadius={BORDER_RADIUS} bg="white" style={styles.memoItem}>
//       <Nav isMemoWide={isWide} memo={memo} onPressEdit={onPressEdit} />
//       <Body isMemoWide={isWide} memo={memo} onPressBody={handlePressBody} />
//     </Box>
//   );
// });

export const MemoItem2 = ({
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
