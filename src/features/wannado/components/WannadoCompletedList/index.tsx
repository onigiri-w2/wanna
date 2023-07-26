import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {useRecoilValue} from 'recoil';

import {WannadoOverview} from '@/domain/types';
import {WannadoListItem} from '@/features/wannado/components/WannadoCompletedList/Item';
import {compWannadoOverviewAllState} from '@/recoil/states/wannadoOverview';

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
        <WannadoListItem onPress={onPress} wannado={item} />
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
