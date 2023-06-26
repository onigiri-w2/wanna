import React from 'react';

import 'react-native-gesture-handler';
import {RootStacks} from '@/navigations/root';
import {AppProvider} from '@/providers';

// whyDidYouRender(React, {
//   trackAllPureComponents: true,
// });

export default function App() {
  return (
    <AppProvider>
      <RootStacks />
    </AppProvider>
  );
}
