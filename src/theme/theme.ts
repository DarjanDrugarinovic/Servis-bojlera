import env, { LOCATIONS } from "config/env";
import { DefaultTheme } from "styled-components";

const { LOCATION } = env;

const primary = (location: string) => {
  if (location === LOCATIONS.BEOGRAD) return "#da5b00";
  if (location === LOCATIONS.VRACAR) return "green";
  if (location === LOCATIONS.STARI_GRAD) return "red";

  return "#da5b00";
};

const theme: DefaultTheme = {
  colors: {
    primary: primary(LOCATION),
  },
};

export { theme };
