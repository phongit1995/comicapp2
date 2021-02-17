import { Dimensions, PixelRatio } from "react-native";
import { getStatusBarHeight } from 'react-native-status-bar-height';
const { width } = Dimensions.get("window");

export interface IconProps {
  active?: boolean;
}
export const iconload = require('../assets/image/a9t.gif');
export const STATUS_BAR_HEIGHT: number = getStatusBarHeight()
const numberOfIcons = 4.5;
const horizontalPadding = 60;
export const DURATION = 450;
export const PADDING = 16;
export const SEGMENT = PixelRatio.roundToNearestPixel(width / numberOfIcons);
export const ICON_SIZE = SEGMENT - horizontalPadding - 5;
export const frameWidth = 350;
export const frameHeight = 350;
export const Colors = {
  primary: "#000",
  border: "#000",
};


export const SCREEN_HEIGHT : number = Math.round(Dimensions.get('window').height)
export const SCREEN_WIDTH : number = Math.round(Dimensions.get('window').width)
export const SCREEN_WIDTH_No : number = Dimensions.get('window').width
