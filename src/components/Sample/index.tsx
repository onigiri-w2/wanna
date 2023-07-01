import React from 'react';
import {View, Text} from 'react-native';

import {useRecoilValue} from 'recoil';

import {wannadoOverviewAllState} from '../../recoil/states/wannadoOverview';

export const Sample = () => {
  console.log('Sample');
  const wannadoOverviewAll = useRecoilValue(wannadoOverviewAllState);
  console.log('wannadoOverviewAll', wannadoOverviewAll);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}>
      <Text>aaaaaaaa</Text>
    </View>
  );
};
