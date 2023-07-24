import React from 'react';

import {SafeAreaView as SafeAreaViewCore} from 'react-native-safe-area-context';

import {commonStyles} from '@/styles/commonRNStyles';

type Props = {
  topColorCode?: string;
  bottomColorCode?: string;
  children: React.ReactNode;
};
export const SafeAreaView = ({
  bottomColorCode,
  topColorCode,
  children,
}: Props) => {
  const topColor = topColorCode ?? 'white';
  const bottomColor = bottomColorCode ?? 'white';

  return (
    <>
      <SafeAreaViewCore
        style={[
          {
            backgroundColor: topColor,
          },
        ]}
        edges={['right', 'top', 'left']}
      />
      <SafeAreaViewCore
        style={[
          commonStyles.flex1,
          {
            backgroundColor: bottomColor,
          },
        ]}
        edges={['right', 'bottom', 'left']}>
        {children}
      </SafeAreaViewCore>
    </>
  );
};
