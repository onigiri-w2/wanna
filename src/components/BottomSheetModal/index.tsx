import React, {useEffect, useRef} from 'react';
import {StyleSheet} from 'react-native';

import {BottomSheetModal as BottomSheetModalInner} from '@gorhom/bottom-sheet';

import {MAIN_COLOR, BORDER_RADIUS} from '@/styles/const';

/**
 * Note:
 *  このコンポーネントを使うときは、BottomSheetModalProvider が必要です。
 */

type Props = {
  isShow: boolean;
  onClose: () => void;
  snapPoints?: string[];
  children: React.ReactNode;
};
export const BottomSheetModal = ({
  isShow,
  onClose,
  snapPoints = ['100%', '100%'], // 要素が最低2つ必要らしいので、この形になってる。
  children,
}: Props) => {
  const ref = useRef<BottomSheetModalInner>(null);

  useEffect(() => {
    if (isShow) {
      ref.current?.present();
    } else {
      ref.current?.dismiss();
    }
  }, [isShow]);

  return (
    <BottomSheetModalInner
      ref={ref}
      index={1}
      snapPoints={snapPoints}
      handleStyle={styles.handle}
      onDismiss={onClose}>
      {children}
    </BottomSheetModalInner>
  );
};

const styles = StyleSheet.create({
  handle: {
    backgroundColor: MAIN_COLOR,
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
  },
});
