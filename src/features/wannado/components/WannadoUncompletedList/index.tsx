import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet} from 'react-native';

import DraggableFlatList from 'react-native-draggable-flatlist';
import {useRecoilValue} from 'recoil';

import {wannadoAllActions} from '@/recoil/actions/wannadoAllActions';
import {uncompWannadoOverviewAllState} from '@/recoil/states/wannadoOverview';

import {WannadoListItem} from './Item';

export const WannadoUncompletedList = () => {
  const wannadoList = useRecoilValue(uncompWannadoOverviewAllState);
  const ref = useRef<any>(null);
  const [listLength, setListLength] = useState<number>(wannadoList.length);

  useEffect(() => {
    if (wannadoList && wannadoList.length > listLength) {
      ref.current?.getScrollResponder()?.scrollToEnd({animated: true});
    }
    setListLength(wannadoList.length);
  }, [wannadoList]);

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
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    paddingTop: 16,
    paddingBottom: 200,
  },
});
