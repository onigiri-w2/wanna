import React, {useRef} from 'react';
import {StyleSheet} from 'react-native';

import DraggableFlatList from 'react-native-draggable-flatlist';
import {useRecoilValue} from 'recoil';

import {wannadoAllActions} from '@/recoil/actions/wannadoAllActions';
import {uncompWannadoOverviewAllState} from '@/recoil/states/wannadoOverview';

import {WannadoListItem} from './Item';

export const WannadoUncompletedList = () => {
  const wannadoList = useRecoilValue(uncompWannadoOverviewAllState);
  const ref = useRef<any>(null);

  return (
    <DraggableFlatList
      ref={ref}
      contentContainerStyle={styles.flatList}
      data={wannadoList}
      renderItem={WannadoListItem}
      keyExtractor={item => item.id}
      onDragEnd={({data}) => {
        wannadoAllActions.setOrderWannado(data.map(d => d.id));
      }}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    paddingVertical: 16,
  },
});
