import {useNavigation, NavigationProp} from '@react-navigation/native';

import {MemoPageNavParamList} from '../stack';

export const useNavigator = () => {
  const navigation = useNavigation<NavigationProp<MemoPageNavParamList>>();

  const navigateToMemoEditor = () => {
    navigation.navigate('MemoEditor');
  };
  const navigateToMemoHome = () => {
    navigation.navigate('MemoHome');
  };

  return {
    navigateToMemoEditor,
    navigateToMemoHome,
  };
};
