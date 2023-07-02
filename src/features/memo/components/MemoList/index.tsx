import {useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {useRecoilValue} from 'recoil';

import {activeWannadoMemosState} from '@/recoil/states/activeWannado';
import {BORDER_RADIUS} from '@/styles/const';

import {MemoItem} from '../MemoItem';

type Props = {
  onPressMemo: (memoId: string) => void;
};
export const MemoList = ({onPressMemo}: Props) => {
  const memos = useRecoilValue(activeWannadoMemosState);

  const handlePressMemo = useCallback((memoId: string) => {
    onPressMemo(memoId);
  }, []);

  return (
    <FlatList
      contentContainerStyle={styles.flatList}
      data={memos}
      renderItem={({item}) => (
        <View style={styles.memoItem}>
          <MemoItem memo={item} onPressEdit={handlePressMemo} />
        </View>
      )}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    borderRadius: BORDER_RADIUS,
    paddingBottom: 100,
  },
  memoItem: {
    marginBottom: 16,
  },
});
