import React from 'react';
import {StyleSheet} from 'react-native';

import {VStack} from 'native-base';
import SafeAreaView from 'react-native-safe-area-view';

import {MAIN_COLOR, BACKGROUND_GRAY_COLOR} from '@/styles/const';

import {SettingsStacks} from './navigations/stack';

// TODO: 全体的に何かしら修正、リファクタリングできるはずです...
// TODO: この設定部分は今後のアプリ開発時に使いまわせる状態にしておきたいですね。
export const SettingsPage = () => {
  return (
    <SafeAreaView style={styles.safe_area}>
      <VStack style={styles.container}>
        <SettingsStacks />
      </VStack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe_area: {
    backgroundColor: MAIN_COLOR,
    flex: 1,
  },
  container: {
    backgroundColor: BACKGROUND_GRAY_COLOR,
    flex: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
