import { IconType } from "react-icons";

export interface ButtonConfig {
  textColor?: string;
  bgColor?: string;
  bgColorHover?: string;
  bgColorActive?: string;
  shape?: "default" | "circle" | "round";
}

export const buttonConfig: Record<string, ButtonConfig> = {
  whiteTransparentButton: {
    textColor: "#FFFFFF",
    bgColor: "#000000",
    bgColorHover: "#e3e3e336",
    shape: "round",
  },
  whiteBgButton: {
    textColor: "#000000",
    bgColor: "#FFF",
    bgColorHover: "#f7f3f3",
    bgColorActive: "#f0efef8f",
    shape: "round",
  },
  blackBgButton: {},
  transparentUnderlineButton: {},
};
