import {View, StyleSheet} from 'react-native';

import {Modal} from '@/components/Modal';
import {LinkAddr} from '@/features/link/components/LinkAddr2';
import {LinkList} from '@/features/link/components/LinkList';
import {useShow} from '@/hooks/useShow';

import {Buttons} from './Buttons';

export const LinkPage = () => {
  const {isShow, show, hide} = useShow();

  return (
    <View style={styles.container}>
      <LinkList />
      <Buttons onPressAdd={show} />
      <Modal isOpen={isShow} close={hide}>
        <LinkAddr onAdd={hide} />
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingHorizontal: 16,
  },
});
