import {useCallback, useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {Box} from 'native-base';
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

  useEffect(() => {
    console.log('memos', memos.length);
  }, [memos]);

  return (
    <FlatList
      contentContainerStyle={styles.flatList}
      data={memos}
      renderItem={({item}) => (
        <Box mb={4}>
          <MemoItem memo={item} onPressEdit={handlePressMemo} />
        </Box>
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
});
