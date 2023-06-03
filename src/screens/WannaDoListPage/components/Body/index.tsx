import React from 'react';
import {ScrollView, View} from 'react-native';

import {Text} from 'native-base';

import {KeyboardAvoidingView} from '@/components/KeyboardAvoidngView';
import {AddWannaDoForm} from '@/features/wannado/components/AddWannaDoForm';
import {WannaDoList} from '@/features/wannado/components/WannaDoList';
import {BACKGROUND_GRAY_COLOR, PAGE_BODY_PADDING} from '@/styles/const';

import {useWannaDoneModalContext} from '../../providers';

import {useBody} from './hooks';

export const Body = () => {
  const {isModalVisible} = useWannaDoneModalContext();
  return (
    <>
      <DoList isShow={!isModalVisible} />
      <DoneList isShow={isModalVisible} />
    </>
  );
};

type DoProps = {
  isShow: boolean;
};

const DoList = ({isShow}: DoProps) => {
  const {handlePress} = useBody();
  return (
    <View
      style={
        isShow
          ? {flex: 1, backgroundColor: BACKGROUND_GRAY_COLOR}
          : {flex: 1, backgroundColor: BACKGROUND_GRAY_COLOR, display: 'none'}
      }>
      <ScrollView
        contentContainerStyle={{
          padding: PAGE_BODY_PADDING,
          paddingBottom: 200,
        }}>
        <WannaDoList onPress={handlePress} />
      </ScrollView>
      <KeyboardAvoidingView>
        <AddWannaDoForm />
      </KeyboardAvoidingView>
    </View>
  );
};

type DoneProps = {
  isShow: boolean;
};
const DoneList = ({isShow}: DoneProps) => {
  return (
    <View
      style={
        isShow
          ? {flex: 1, backgroundColor: BACKGROUND_GRAY_COLOR}
          : {flex: 1, backgroundColor: BACKGROUND_GRAY_COLOR, display: 'none'}
      }>
      <ScrollView
        contentContainerStyle={{
          padding: PAGE_BODY_PADDING,
          paddingBottom: 200,
        }}>
        <Text textAlign="center" fontSize={16} color="gray.700">
          現時点でやったことは無いようです。
        </Text>
      </ScrollView>
    </View>
  );
};
