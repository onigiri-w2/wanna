import React, {useEffect} from 'react';

import {RouteProp, useRoute} from '@react-navigation/native';
import {VStack} from 'native-base';

import {SafeAreaView} from '@/components/SafeAreaView';
import {RootNavParamList} from '@/navigations/root';
import {activeWannadoActions} from '@/recoil/actions/activeWannadoActions';
import {editTodoShowActions} from '@/recoil/states/editTargetTodo';
import {commonStyles} from '@/styles/commonRNStyles';
import {MAIN_COLOR} from '@/styles/const';

import {Header} from './components/Header';
import {WannadoNavTab} from './navigations/tab';

export const WannadoDetailPage = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const route = useRoute<RouteProp<RootNavParamList, 'WannadoDetailPage'>>();

  useEffect(() => {
    activeWannadoActions.setActiveWannado(route.params.wannadoId);
    setIsLoading(false);
    editTodoShowActions.setShowFalse();
  }, []);

  return (
    <SafeAreaView topColorCode={MAIN_COLOR} bottomColorCode="white">
      {!isLoading && (
        <VStack style={commonStyles.flex1}>
          <Header />
          <WannadoNavTab />
        </VStack>
      )}
    </SafeAreaView>
  );
};
