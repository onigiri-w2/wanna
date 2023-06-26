import React from 'react';
import {FlatList} from 'react-native';

import {Box} from 'native-base';

import {WannadoSerialized} from '@/domain/model/entity/wannado';
import {WannadoListItem} from '@/features/wannado/components/WannadoListItem';
import {BORDER_GRAY_COLOR} from '@/styles/const';

type Props = {
  onPress: (wannado: WannadoSerialized) => void;
  wannadoList: WannadoSerialized[];
};

export const WannadoCompletedList = ({onPress, wannadoList}: Props) => {
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
