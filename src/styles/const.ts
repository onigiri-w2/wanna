/**
 * TODO: NativeBaseって、端末に合わせてサイズの実態値を変えてくれるのか？
 * 例えば、iPhoneXとかだと、px: 16 -> 4 になって、逆に、iPadだと、px: 16 -> 8 になるとか？
 * そうだとするなら、pxで定義する戦略を変える必要がある。
 */

// フォント定義
export const FONT_SIZE_PAGE_HEADER = 20;
export const FONT_WEIGHT_PAGE_HEADER = "bold";

// 色定義
export const MAIN_COLOR = "#facc15"; // NativeBase -> "yellow.400"
export const MAIN_COLOR_LIGHT = "#fff350"; // NativeBase -> "yellow.200"
export const MAIN_COLOR_VERY_LIGHT = "#fefce8"; // NativeBase -> "yellow.100"
export const ACCENT_COLOR = "#007AB7";
export const BACKGROUND_GRAY_COLOR = "#f5f5f4"; // NativeBase -> "gray.100"
export const BORDER_GRAY_COLOR = "#e2e2e1"; // NativeBase -> "gray.200"

// ページヘッダー定義
export const PAGE_HEADER_HEIGHT = 64; // px: NativeBase -> 16
export const PAGE_HEADER_PADDING = 16; // px: NativeBase -> 4
export const PAGE_HEADER_COLOR = MAIN_COLOR;
export const PAGE_HEADER_ICON_SIZE = 32; // px: NativeBase -> 8

// ページボディ定義
export const PAGE_BODY_PADDING = 16; // px: NativeBase -> 4

// 形系定義
export const BORDER_RADIUS = 5;
export const BORDER_CIRCLE_RADIUS = 100;

// Addフォーム系
export const ADD_FORM_HEIGHT = 40; // px: NativeBase -> 10
export const ADD_FORM_PADDING = 16; // px: NativeBase -> 4
