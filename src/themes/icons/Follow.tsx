import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg"
import { Colors, ICON_SIZE, IconProps } from "../../constants";

export default ({ active }: IconProps) => {
    return (
        <Svg
        width={ICON_SIZE} height={ICON_SIZE}
            viewBox="0 0 512 512"

        >
            <Path
                d="M368 415.86V72a24.07 24.07 0 00-24-24H72a24.07 24.07 0 00-24 24v352a40.12 40.12 0 0040 40h328"
                fill={active ? Colors.primary : "none"}
                stroke={active ? Colors.border : Colors.border}
                strokeLinejoin="round"
                strokeWidth={32}
            />
            <Path
                d="M416 464h0a48 48 0 01-48-48V128h72a24 24 0 0124 24v264a48 48 0 01-48 48z"
                fill={active ? Colors.primary : "none"}
                stroke={active ? Colors.border : Colors.border}
                strokeLinejoin="round"
                strokeWidth={32}
            />
            <Path
               fill={active ? Colors.primary : "none"}
               stroke={active ? '#fff' : Colors.border}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
                d="M240 128h64m-64 64h64m-192 64h192m-192 64h192m-192 64h192"
            />
            <Path d="M176 208h-64a16 16 0 01-16-16v-64a16 16 0 0116-16h64a16 16 0 0116 16v64a16 16 0 01-16 16z" />
        </Svg>
    );
};
