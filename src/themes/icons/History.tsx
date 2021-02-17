import * as React from "react";
import Svg, { Rect, Circle, Path } from "react-native-svg"
import { Colors, ICON_SIZE, IconProps } from "../../constants";

export default ({ active }: IconProps) => {
    return (
        <Svg
            viewBox="0 0 512 512"
            width={ICON_SIZE} height={ICON_SIZE}
        >
            <Rect
                fill={active ? Colors.primary : "none"}
                stroke={active ? Colors.border : Colors.border}
                strokeLinejoin="round"
                strokeWidth={32}
                x={48}
                y={80}
                width={416}
                height={384}
                rx={48}
            />
            <Circle cx={296} cy={232} r={24} />
            <Circle cx={376} cy={232} r={24} />
            <Circle cx={296} cy={312} r={24} />
            <Circle cx={376} cy={312} r={24} />
            <Circle cx={136} cy={312} r={24} />
            <Circle cx={216} cy={312} r={24} />
            <Circle cx={136} cy={392} r={24} />
            <Circle cx={216} cy={392} r={24} />
            <Circle cx={296} cy={392} r={24} />
            <Path
                fill={active ? Colors.primary : "none"}
                stroke={active ? '#fff' : Colors.border}
                strokeLinejoin="round"
                strokeWidth={32}
                strokeLinecap="round"
                d="M128 48v32m256-32v32"
            />
            <Path
                fill={active ? Colors.primary : "none"}
                stroke={active ? '#fff' : Colors.border}
                strokeLinejoin="round"
                strokeWidth={32}
                d="M464 160H48"
            />
        </Svg>
    );
};
