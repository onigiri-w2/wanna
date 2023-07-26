import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useRecoilValue} from 'recoil';

import {wannadoOverviewAllState} from '@/recoil/states/wannadoOverview';
import {SettingsPage} from '@/screens/SettingsScreen';
import {WannadoCompletedListScreen} from '@/screens/WannadoCompletedListScreen';
import {WannadoDetailPage} from '@/screens/WannadoDetailScreen';
import {WannadoListScreen} from '@/screens/WannadoListScreen';

export type RootNavParamList = {
  WannadoListPage: undefined;
  WannadoCompletedListPage: undefined;
  WannadoDetailPage: {wannadoId: string};
  SettingsPage: undefined;
};
const RootStack = createNativeStackNavigator<RootNavParamList>();

export const RootStacks = () => {
  // なんかNavigatorの中で初期値を非同期でロードするatomを使ってると画面が表示されなくなるバグある。
  // 現状、根本的な解決策はわからないので、暫定対応としてNavigatorの中で利用するatomの初期ロードが終わるまでNavigatorを表示しないようにする
  // そのために、ここでatomを参照している
  // ここでatomを参照してたら、初期ロードが終わるまではNavigatorを表示しない
  // 上位コンポーネントにSuspenseを置くことで、初期ロードが終わるまで表示しないようにできる
  useRecoilValue(wannadoOverviewAllState);

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="WannadoListPage">
      <RootStack.Screen name="WannadoListPage" component={WannadoListScreen} />
      <RootStack.Screen
        name="WannadoDetailPage"
        component={WannadoDetailPage}
      />
      <RootStack.Screen name="SettingsPage" component={SettingsPage} />
      <RootStack.Screen
        name="WannadoCompletedListPage"
        component={WannadoCompletedListScreen}
      />
    </RootStack.Navigator>
  );
};
