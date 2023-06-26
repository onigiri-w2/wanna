import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {LinkPage} from '../components/LinkPage';
import {MemoPage} from '../components/MemoPage';
import {TodoPage} from '../components/TodoPage';

type WannadoNavParamList = {
  Todo: undefined;
  Memo: undefined;
  Link: undefined;
};
const Tab = createBottomTabNavigator<WannadoNavParamList>();

export const WannadoNavTab = React.memo(() => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Todo"
        component={TodoPage}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="tasks" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Memo"
        component={MemoPage}
        options={{
          tabBarIcon: ({color, size}) => (
            <SimpleLineIcons name="note" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Link"
        component={LinkPage}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="link" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
});
