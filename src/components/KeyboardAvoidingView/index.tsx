/**
 * KeyboardAvoidingViewのポイント
 * 1. Androidではbehaviorを指定しない方がいいっぽい
 *   - 参考: https://dev-dub.hatenablog.com/entry/2019/02/02/121229
 * 2. iOSでは、ヘッダーやらSafeAreaやらを考慮して、keyboardVerticalOffsetを指定する必要がある
 *   - 参考: https://honmushi.com/2019/12/24/keybord-avoiding/
 */
import React from 'react';
import {
  KeyboardAvoidingViewProps,
  Platform,
  KeyboardAvoidingView as CommonKeyboardAvoidingView,
} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {PAGE_HEADER_HEIGHT} from '@/styles/const';

export const KeyboardAvoidingView = (props: KeyboardAvoidingViewProps) => {
  const insets = useSafeAreaInsets();
  const iosVerticalOffset = insets.top + PAGE_HEADER_HEIGHT;

  return (
    <CommonKeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      {...props}
      keyboardVerticalOffset={Platform.OS === 'ios' ? iosVerticalOffset : 0}
    />
  );
};
