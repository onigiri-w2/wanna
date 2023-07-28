import {showMessage, hideMessage} from 'react-native-flash-message';

export function showFlashMessage(
  message: string,
  type: 'success' | 'danger' | 'warning' | 'info' | 'default',
) {
  showMessage({
    message,
    type,
    titleStyle: {fontWeight: 'bold'},
    duration: 1500,
    autoHide: true,
    hideOnPress: true,
    floating: true, // Note: これつけたら、メッセージの形が変わる。
    position: 'top',
    onPress: () => {
      hideMessage();
    },
  });
}
