import React, { memo } from "react";
import { Modal } from "react-native";

import ExternalEmojiModal from "react-native-emoji-modal";

type Props = {
  isModalVisible: boolean;
  onPressEmoji: (emoji: string | null) => void;
  onPressOutside: () => void;
};

export const EmojiModal = memo(
  ({ isModalVisible, onPressEmoji, onPressOutside }: Props) => {
    return (
      <Modal visible={isModalVisible} transparent>
        <ExternalEmojiModal
          onEmojiSelected={onPressEmoji}
          onPressOutside={onPressOutside}
        />
      </Modal>
    );
  }
);
