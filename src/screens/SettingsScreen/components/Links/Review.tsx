import React from 'react';
import {Linking, Platform} from 'react-native';

import {BaseLink} from './base';

// Note: ハードコーディング！！！まあええわ。機密情報でもないし。
const IOS_APP_ID = '6451151247'; // App store connectから取得できる
const ANDROID_APP_ID = 'com.wannadoasstmobile'; // google play consoleから取得できる

export const Review = () => {
  const url =
    Platform.OS === 'ios'
      ? `https://apps.apple.com/app/id${IOS_APP_ID}}`
      : `https://play.google.com/store/apps/details?id=${ANDROID_APP_ID}`;

  const onPress = () => {
    Linking.openURL(url);
  };
  return <BaseLink text="レビューを書く" onPress={onPress} />;
};
