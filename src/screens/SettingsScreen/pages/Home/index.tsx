import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import {Text} from 'native-base';

import {useRootNavigator} from '@/navigations/hooks/useNavigator';
import {BACKGROUND_GRAY_COLOR, BORDER_RADIUS, MAIN_COLOR} from '@/styles/const';

import {Header} from '../../components/Header';
import {Inquiry} from '../../components/Links/Inquiry';
import {PrivacyPolicy} from '../../components/Links/PrivacyPolicy';
import {Review} from '../../components/Links/Review';
import {TermsOfUse} from '../../components/Links/TermsOfUse';

export const Home = () => {
  const {navigateToWannadoList} = useRootNavigator();
  const goTo = () => {
    navigateToWannadoList();
  };
  return (
    <>
      <Header goTo={goTo} title="設定" />
      <ScrollView style={styles.body}>
        <Section title="利用に関して" mtPx={20}>
          <Inquiry />
        </Section>
        <Section title="評価に関して" mtPx={40}>
          <Review />
        </Section>
        <Section title="アプリに関して" mtPx={40}>
          <PrivacyPolicy />
          <TermsOfUse />
        </Section>
      </ScrollView>
    </>
  );
};

type SectionProps = {
  title: string;
  mtPx?: number;
  children: React.ReactNode;
};
const Section = ({title, mtPx, children}: SectionProps) => {
  return (
    <View style={{marginTop: mtPx}}>
      <Text mb={3} mx={1} color="#555">
        {title}
      </Text>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: BORDER_RADIUS,
        }}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safe_area: {
    backgroundColor: MAIN_COLOR,
    flex: 1,
  },
  container: {
    backgroundColor: BACKGROUND_GRAY_COLOR,
    flex: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
