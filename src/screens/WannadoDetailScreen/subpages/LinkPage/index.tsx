import {View, StyleSheet} from 'react-native';

import {Modal} from '@/components/Modal';
import {LinkAddr} from '@/features/link/components/LinkAddr';
import {LinkList} from '@/features/link/components/LinkList';
import {useShow} from '@/hooks/useShow';
import {activeWannadoActions} from '@/recoil/actions/activeWannadoActions';

import {Buttons} from './Buttons';

export const LinkPage = () => {
  const {isShow, show, hide} = useShow();

  const handleLinkAdd = (title: string, url: string) => {
    activeWannadoActions.addLink(title, url);
    hide();
  };

  return (
    <View style={styles.container}>
      <LinkList />
      <Buttons onPressAdd={show} />
      <Modal isOpen={isShow} close={hide}>
        <LinkAddr onAdd={handleLinkAdd} />
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
