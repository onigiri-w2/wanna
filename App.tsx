import React from 'react';

import {RootStacks} from '@/navigations';
import {AppProvider} from '@/providers';

export default function App() {
  return (
    <AppProvider>
      <RootStacks />
    </AppProvider>
  );
}
