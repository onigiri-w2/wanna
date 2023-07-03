import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';

import {useRecoilValue} from 'recoil';

import {activeWannadoLinksState} from '@/recoil/states/activeWannado';
import {BORDER_RADIUS} from '@/styles/const';

import {LinkItem} from '../LinkItem';

export const LinkList = () => {
  const links = useRecoilValue(activeWannadoLinksState);
  return (
    <FlatList
      contentContainerStyle={styles.flatList}
      data={links}
      renderItem={({item}) => (
        <View style={styles.linkItem}>
          <LinkItem link={item} />
        </View>
      )}
      keyExtractor={item => item.id}
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
