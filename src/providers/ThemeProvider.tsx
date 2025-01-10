import { FC, ReactNode } from "react";
import { ThemeProvider as ThemeProviderSC } from "styled-components";
import { theme } from "theme/theme";

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return <ThemeProviderSC theme={theme}>{children}</ThemeProviderSC>;
};
