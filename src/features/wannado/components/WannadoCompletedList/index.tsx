import React from 'react';
import {FlatList} from 'react-native';

import {Box} from 'native-base';
import {useRecoilValue} from 'recoil';

import {WannadoOverview} from '@/domain/types';
import {WannadoListItem} from '@/features/wannado/components/WannadoListItem';
import {wannadoOverviewAllState} from '@/recoil/states/wannadoOverview';
import {BORDER_GRAY_COLOR} from '@/styles/const';

type Props = {
  onPress: (wannado: WannadoOverview) => void;
};

export const WannadoCompletedList = ({onPress}: Props) => {
  const wannadoList = useRecoilValue(wannadoOverviewAllState);
  return (
    <FlatList
      data={wannadoList.filter(value => value.isCompleted)}
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
