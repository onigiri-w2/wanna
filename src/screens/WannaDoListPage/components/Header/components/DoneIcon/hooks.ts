import { useWannaDoneModalContext } from "@/screens/WannaDoListPage/providers";
import { ACCENT_COLOR, MAIN_COLOR } from "@/styles/const";

export const useDoneIcon = () => {
  const { isModalVisible, hideModal, showModal } = useWannaDoneModalContext();
  const bgColor = isModalVisible ? ACCENT_COLOR : MAIN_COLOR;
  const color = isModalVisible ? "white" : "black";

  function handlePress() {
    if (isModalVisible) hideModal();
    else showModal();
  }

  return {
    bgColor,
    color,
    handlePress,
  };
};
