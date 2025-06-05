/* eslint-disable */
import "styled-components";
import { theme } from "../styles/theme";

type ThemeType = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

import type { CSSProp } from "styled-components";

declare module "react" {
  interface DOMAttributes<T = any> {
    css?: CSSProp;
  }
}
