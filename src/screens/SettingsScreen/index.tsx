import React from 'react';
import {StyleSheet} from 'react-native';

import {VStack} from 'native-base';

import {SafeAreaView} from '@/components/SafeAreaView';
import {BACKGROUND_GRAY_COLOR, MAIN_COLOR} from '@/styles/const';

import {Body} from './components/Body';
import {Header} from './components/Header';

// TODO: 全体的に何かしら修正、リファクタリングできるはずです...
// TODO: この設定部分は今後のアプリ開発時に使いまわせる状態にしておきたいですね。
export const SettingsPage = () => {
  return (
    <SafeAreaView
      topColorCode={MAIN_COLOR}
      bottomColorCode={BACKGROUND_GRAY_COLOR}>
      <VStack style={styles.container}>
        <Header />
        <Body />
      </VStack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_GRAY_COLOR,
    flex: 1,
  },
});
