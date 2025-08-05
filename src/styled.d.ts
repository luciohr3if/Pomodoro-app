import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: string;
    background: string;
    button: string;
    buttonHover: string;
    foreground: string;
  }
}