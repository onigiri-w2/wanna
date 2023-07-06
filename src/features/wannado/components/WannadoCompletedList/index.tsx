import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {Box} from 'native-base';
import {useRecoilValue} from 'recoil';

import {WannadoOverview} from '@/domain/types';
import {WannadoListItem} from '@/features/wannado/components/WannadoCompletedList/Item';
import {compWannadoOverviewAllState} from '@/recoil/states/wannadoOverview';
import {BORDER_GRAY_COLOR} from '@/styles/const';

type Props = {
  onPress: (wannado: WannadoOverview) => void;
};

export const WannadoCompletedList = ({onPress}: Props) => {
  const wannadoList = useRecoilValue(compWannadoOverviewAllState);
  return (
    <FlatList
      data={wannadoList.filter(value => value)}
      contentContainerStyle={styles.flatList}
      renderItem={({item}) => (
        <Box
          bg="white"
          borderBottomWidth={1}
          borderBottomColor={BORDER_GRAY_COLOR}>
          <WannadoListItem onPress={onPress} wannado={item} />
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
