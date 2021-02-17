import * as React from "react";
import Svg, { Path } from "react-native-svg"
import { Colors, ICON_SIZE, IconProps } from "../../constants";

export default ({ active }: IconProps) => {
  return (
    <Svg
      viewBox="0 0 512 512"
      width={ICON_SIZE} height={ICON_SIZE}
    >
      <Path
        d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
        fill={active ? Colors.primary : "none"}
        stroke={active ? Colors.border : Colors.border}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Path
        d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"
        fill={active ? Colors.primary : "none"}
        stroke={active ? Colors.border : Colors.border}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  );
};
