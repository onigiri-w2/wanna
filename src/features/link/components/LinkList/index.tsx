import React from 'react';
import {StyleSheet} from 'react-native';

import DraggableFlatList from 'react-native-draggable-flatlist';
import {useRecoilValue} from 'recoil';

import {activeWannadoActions} from '@/recoil/actions/activeWannadoActions';
import {activeWannadoLinksState} from '@/recoil/states/activeWannado';
import {BORDER_RADIUS} from '@/styles/const';

import {LinkItem} from '../LinkItem';

export const LinkList = () => {
  const links = useRecoilValue(activeWannadoLinksState);
  return (
    <DraggableFlatList
      contentContainerStyle={styles.flatList}
      data={links}
      renderItem={LinkItem}
      keyExtractor={item => item.id}
      onDragEnd={({data}) => {
        activeWannadoActions.updateLinkOrder(data.map(item => item.id));
      }}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    borderRadius: BORDER_RADIUS,
    paddingTop: 16,
    paddingBottom: 200,
  },
  linkItem: {
    marginBottom: 16,
  },
});
