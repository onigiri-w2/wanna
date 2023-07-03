import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {Box} from 'native-base';
import {useRecoilValue} from 'recoil';

import {WannadoOverview} from '@/domain/types';
import {WannadoListItem} from '@/features/wannado/components/WannadoListItem';
import {uncompWannadoOverviewAllState} from '@/recoil/states/wannadoOverview';
import {BORDER_GRAY_COLOR} from '@/styles/const';

type Props = {
  onPressEl: (wannado: WannadoOverview) => void;
};

export const WannadoUncompletedList = ({onPressEl}: Props) => {
  const wannadoList = useRecoilValue(uncompWannadoOverviewAllState);

  return (
    <FlatList
      contentContainerStyle={styles.flatList}
      data={wannadoList.filter(value => !value.isCompleted)}
      renderItem={({item}) => (
        <Box
          bg="white"
          borderBottomWidth={1}
          borderBottomColor={BORDER_GRAY_COLOR}>
          <WannadoListItem onPress={onPressEl} wannado={item} />
        </Box>
      )}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    paddingTop: 16,
    paddingBottom: 200,
  },
});
