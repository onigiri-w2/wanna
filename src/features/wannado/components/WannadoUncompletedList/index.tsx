import React from 'react';
import {StyleSheet} from 'react-native';

import DraggableFlatList from 'react-native-draggable-flatlist';
import {useRecoilValue} from 'recoil';

import {
  uncompWannadoOverviewAllState,
  wannadoOverviewAllActions,
} from '@/recoil/states/wannadoOverview';

import {WannadoListItem} from './Item';

export const WannadoUncompletedList = () => {
  const wannadoList = useRecoilValue(uncompWannadoOverviewAllState);

  return (
    <DraggableFlatList
      contentContainerStyle={styles.flatList}
      data={wannadoList}
      renderItem={WannadoListItem}
      keyExtractor={item => item.id}
      onDragEnd={({data}) => {
        wannadoOverviewAllActions.setOrderWannado(data.map(d => d.id));
      }}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    paddingTop: 16,
    paddingBottom: 200,
  },
});
