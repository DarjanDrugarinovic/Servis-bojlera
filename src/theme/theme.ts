import { DefaultTheme } from "styled-components";
import { location } from "config/env";
import { COLORS } from "config/contstants";

const theme: DefaultTheme = {
  colors: {
    primary: COLORS[location],
  },
};

export { theme };
