import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg"
import { Colors, ICON_SIZE, IconProps } from "../../constants";

export default ({ active }: IconProps) => {
  return (
    <Svg
      width={ICON_SIZE} height={ICON_SIZE}
      viewBox="0 0 512 512"

    >
      <Path
        d="M336 64h32a48 48 0 0148 48v320a48 48 0 01-48 48H144a48 48 0 01-48-48V112a48 48 0 0148-48h32"
        fill={active ? Colors.primary : "none"}
        stroke={active ? Colors.border : Colors.border}
        strokeLinejoin="round"
        strokeWidth={32}
      
      />
      <Rect
        x={176}

        y={32}
        width={160}
        height={64}
        rx={26.13}
        ry={26.13}
        fill={active ? Colors.primary : "none"}
        stroke={active ? '#fff' : Colors.border}
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  );
};
