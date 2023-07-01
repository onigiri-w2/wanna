import React, {useEffect} from 'react';

import {RouteProp, useRoute} from '@react-navigation/native';
import {VStack} from 'native-base';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SafeAreaView from 'react-native-safe-area-view';

import {ActiveWannadoProvider} from '@/features/wannado/providers/ActiveWannadoProvider';
import {RootNavParamList} from '@/navigations/root';
import {activeWannadoActions} from '@/recoil/states/activeWannado';
import {style} from '@/screens/WannadoDetailScreen/style';

import {Header} from './components/Header';
import {WannadoNavTab} from './navigations/tab';

export const WannadoDetailPage = () => {
  const route = useRoute<RouteProp<RootNavParamList, 'WannadoDetailPage'>>();

  useEffect(() => {
    activeWannadoActions.setActiveWannado(route.params.wannadoId);
  }, []);

  return (
    <ActiveWannadoProvider wannadoId={route.params.wannadoId}>
      <SafeAreaView style={style.container}>
        <GestureHandlerRootView style={{flex: 1}}>
          <VStack style={style.vstack}>
            <Header />
            <WannadoNavTab />
          </VStack>
        </GestureHandlerRootView>
      </SafeAreaView>
    </ActiveWannadoProvider>
  );
};
