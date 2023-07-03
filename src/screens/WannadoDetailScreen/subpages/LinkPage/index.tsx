import {View, StyleSheet} from 'react-native';

import {Modal} from '@/components/Modal';
import {LinkAddr} from '@/features/link/components/LinkAddr';
import {LinkList} from '@/features/link/components/LinkList';
import {useShow} from '@/hooks/useShow';

import {Buttons} from './Buttons';

export const LinkPage = () => {
  const {isShow, show, hide} = useShow();
  const handleAdd = async (title: string, url: string) => {
    hide();
  };

  return (
    <View style={styles.container}>
      <LinkList />
      <Buttons onPressAdd={show} />
      <Modal isOpen={isShow} close={hide}>
        <LinkAddr onAdd={handleAdd} />
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
