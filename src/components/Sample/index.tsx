import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';

import {TouchableOpacity} from '@gorhom/bottom-sheet';
import DraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

type Item = {
  id: number;
  label: string;
};

export const Sample = () => {
  const [data, setData] = useState<Item[]>([
    {
      id: 1,
      label: 'Item 1',
    },
    {
      id: 2,
      label: 'Item 2',
    },
    {
      id: 3,
      label: 'Item 3',
    },
    {
      id: 4,
      label: 'Item 4',
    },
  ]);

  const renderItem = ({
    item,
    drag,
    isActive,
    getIndex,
  }: RenderItemParams<Item>) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity
          delayLongPress={200}
          onLongPress={drag}
          disabled={isActive}
          style={[styles.rowItem, isActive && styles.shadow]}>
          <Text>{item.label}</Text>
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
      }}>
      <DraggableFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => `draggable-item-${item.id}`}
        onDragEnd={({data}) => setData(data)}
      />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  rowItem: {
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 20,
  },
});
