import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: string;
    background: string;
    text: string;
    card: string;
    button: string;
    buttonText: string;
    inputBackground: string;
    inputPlaceholder: string;
    inputText: string;
    cardIconColor: string;
    footerBackground: string;
    modalBackground: string;
  }
}