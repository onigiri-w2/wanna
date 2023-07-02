import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {FallbackProps} from 'react-error-boundary';

export const RootErrorFallback = (props: FallbackProps) => {
  // TODO: 問い合わせリンクを貼っておく
  // TODO: エラー内容をどっかに送信する。slack, sentry, mail, etc...
  // TODO: 端末とかの識別できるようにしておく
  return (
    <View style={styles.container}>
      <Text>何かしらの異常が起きました</Text>
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
