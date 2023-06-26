import {useNavigation, NavigationProp} from '@react-navigation/native';

import {SettingsNavParamList} from '../stack';

export const useSettingsNavigator = () => {
  const navigation = useNavigation<NavigationProp<SettingsNavParamList>>();

  function navigateToPrivacyPolicy() {
    navigation.navigate('PrivacyPolicy');
  }
  function navigateToTermsOfUse() {
    navigation.navigate('TermsOfUse');
  }
  function navigateToUsage() {
    navigation.navigate('Usage');
  }
  function navigateToInquiry() {
    navigation.navigate('Inquiry');
  }
  function navigateToHome() {
    navigation.navigate('Home');
  }

  return {
    navigateToPrivacyPolicy,
    navigateToTermsOfUse,
    navigateToUsage,
    navigateToInquiry,
    navigateToHome,
  };
};
