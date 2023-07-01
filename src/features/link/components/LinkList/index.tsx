import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import {Box} from 'native-base';
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
        <Box mb={4}>
          <LinkItem link={item} />
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
