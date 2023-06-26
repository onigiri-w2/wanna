import React from 'react';

import {Text} from 'native-base';

type Props = {
  onPress: () => void;
};
export const Paster = ({onPress}: Props) => {
  return (
    <Text width="100%" textAlign="center" onPress={onPress}>
      リンク貼り付け
    </Text>
  );
};
