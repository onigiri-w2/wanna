import React from 'react';

import AppLink from 'react-native-app-link';

import {BaseLink} from './base';

export const Review = () => {
  const onPress = () => {
    // TODO: 実機で動作検証しつつ、後で修正する
    AppLink.openInStore({
      // iOS用、アプリ名
      appName: 'LINE',
      // iOS用、Apple Id
      appStoreId: 443904275,
      // iOS用、国
      appStoreLocale: 'jp',
      // Android用、パッケージ名
      playStoreId: 'jp.naver.line.android',
    }).catch(e => console.log(e));
  };
  return <BaseLink text="レビューを書く" onPress={onPress} />;
};
