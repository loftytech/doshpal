import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    cyanColor: string;
	lightPrimaryColor: string;
	fadedPrimaryColor: string;
	lightCyanColor: string;
  }
}

export const lightTheme: DefaultTheme = {
	primaryColor: "#653AC8",
	secondaryColor: "#1BC77F",
	cyanColor: "#71D5E4",
	lightPrimaryColor: 'rgba(101, 58, 200, 0.18)',
	fadedPrimaryColor: 'rgba(249, 247, 253, 0.7)',
	lightCyanColor: 'background: rgba(113, 213, 228, 0.4);',
};

export const darkTheme: DefaultTheme = {
	primaryColor: "#653AC8",
	secondaryColor: "#1BC77F",
	cyanColor: "#71D5E4",
	lightPrimaryColor: 'rgba(101, 58, 200, 0.18)',
	fadedPrimaryColor: 'rgba(249, 247, 253, 0.7)',
	lightCyanColor: 'background: rgba(113, 213, 228, 0.4);',
};