import env from "config/env";
import { DefaultTheme } from "styled-components";

const { LOCATION } = env;

const primary = (location: string) => {
  if (location === "beograd") return "#da5b00";
  if (location === "vracar") return "green";

  return "#da5b00";
};

const theme: DefaultTheme = {
  colors: {
    primary: primary(LOCATION),
  },
};

export { theme };
