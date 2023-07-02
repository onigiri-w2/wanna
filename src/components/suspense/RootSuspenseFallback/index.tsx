import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const RootSuspenseFallback = () => {
  return (
    <View style={styles.container}>
      <Text>loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
