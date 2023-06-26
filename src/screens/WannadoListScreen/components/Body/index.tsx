import React from 'react';
import {StyleSheet} from 'react-native';

import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {Wannadoes} from '../Wannadoes';
import {Wannadones} from '../Wannadones';

export const Body = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        <Wannadoes />
        <Wannadones />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
