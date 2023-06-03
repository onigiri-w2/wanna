import { createContext, useContext } from "react";

import { useModal } from "@/hooks/useModal";

type ProviderProps = {
  children: React.ReactNode;
};
type ContextProps = {
  isModalVisible: boolean;
  showModal: () => void;
  hideModal: () => void;
};

export const WannaDoneModalContext = createContext<ContextProps>({
  isModalVisible: false,
  showModal: () => {},
  hideModal: () => {},
});
export const WannaDoneModalProvider = ({ children }: ProviderProps) => {
  const { isModalVisible, showModal, hideModal } = useModal();
  return (
    <WannaDoneModalContext.Provider
      value={{ isModalVisible, showModal, hideModal }}
    >
      {children}
    </WannaDoneModalContext.Provider>
  );
};
export const useWannaDoneModalContext = () => useContext(WannaDoneModalContext);
