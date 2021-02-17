import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg"
import { Colors, ICON_SIZE, IconProps } from "../../constants";
import { SCREEN_WIDTH_No } from '../../constants'
export default ({ active }: IconProps) => {
    return (
        <Svg
            viewBox="0 0 1440 320"
            width={SCREEN_WIDTH_No} height={100}
        >
            <Path
                fill="#fff"
                fill-opacity="1" d="M0,224L720,256L1440,224L1440,320L720,320L0,320Z"
            />
           {/* <Path
                fill="#080808"
                fill-opacity="1" d="M0,64L720,224L1440,64L1440,320L720,320L0,320Z"
            /> */}
        </Svg>
    );
};
