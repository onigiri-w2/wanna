import {StyleSheet} from 'react-native';

import DraggableFlatList from 'react-native-draggable-flatlist';
import {useRecoilValue} from 'recoil';

import {
  activeWannadoMemosState,
  activeWannadoActions,
} from '@/recoil/states/activeWannado';
import {BORDER_RADIUS} from '@/styles/const';

import {MemoItem} from '../MemoItem';

export const MemoList = () => {
  const memos = useRecoilValue(activeWannadoMemosState);

  return (
    <DraggableFlatList
      contentContainerStyle={styles.flatList}
      data={memos}
      renderItem={MemoItem}
      keyExtractor={item => `draggable-item-${item.id}`}
      onDragEnd={({data}) => {
        activeWannadoActions.updateMemoOrder(data.map(d => d.id));
      }}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    borderRadius: BORDER_RADIUS,
    paddingBottom: 200,
    paddingTop: 16,
  },
});
