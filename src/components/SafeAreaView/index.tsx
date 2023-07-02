import React from 'react';

import SafeAreaViewCore from 'react-native-safe-area-view';

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
      />
      <SafeAreaViewCore
        style={[
          commonStyles.flex1,
          {
            backgroundColor: bottomColor,
          },
        ]}
        forceInset={{top: 'never'}}>
        {children}
      </SafeAreaViewCore>
    </>
  );
};
