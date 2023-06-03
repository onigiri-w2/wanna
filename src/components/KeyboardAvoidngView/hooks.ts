import { Platform } from "react-native";

/**
 * KeyboardAvoidingViewのoffsetを返すカスタムフック
 * 現時点では適当に110を返している
 *
 * @returns {number} offset
 */
export const useKeyboardAvoidingOffset = () => {
  const offset = Platform.OS === "ios" ? 110 : 0;
  return offset;
};
