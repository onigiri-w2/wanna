import React from 'react';

import 'react-native-gesture-handler';
import '@/domain/config'; // 初期化

import FlashMessage from 'react-native-flash-message';

import {RootStacks} from '@/navigations/root';
import {AppProvider} from '@/providers';

export default function App() {
  return (
    <AppProvider>
      <RootStacks />
      <FlashMessage position="top" />
    </AppProvider>
  );
}
