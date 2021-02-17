import * as React from "react";
import Svg, { Path } from "react-native-svg"
import { Colors, ICON_SIZE, IconProps } from "../../constants";

export default ({ active }: IconProps) => {
    return (
        <Svg
            width={ICON_SIZE} height={ICON_SIZE}
            viewBox="0 0 24 24"
            fill={active ? Colors.primary : "none"}
            stroke={active ? Colors.border : Colors.border}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"

        >
            <Path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
        </Svg>


    );
};
