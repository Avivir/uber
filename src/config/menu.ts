import { buttonConfig } from "./buttonConfig";
import { ButtonConfig } from "./buttonConfig";

enum ButtonVariant {
  Default = "default",
  Primary = "primary",
  Dashed = "dashed",
  Text = "text",
  Link = "link",
}

export interface SubMenu {
  key: string;
  label: string;
  icon?: string;
  children?: SubMenu[];
}

interface ButtonProps {
  text: string;
  type: ButtonVariant;
  subMenu?: SubMenu[];
  buttonConfig: ButtonConfig;
  icon?: string;
  activeIcon?: string;
  iconPosition?: "start" | "end";
}

export const menu: {
  leftSideButtons: ButtonProps[];
  rightSideButtons: ButtonProps[];
} = {
  leftSideButtons: [
    {
      text: "Ride",
      type: ButtonVariant.Text,
      buttonConfig: buttonConfig.whiteTransparentButton,
    },
    {
      text: "Earn",
      type: ButtonVariant.Text,
      icon: "DownOutlined",
      activeIcon: "UpOutlined",
      iconPosition: "end",
      buttonConfig: buttonConfig.whiteTransparentButton,
      subMenu: [
        {
          key: "1",
          label: "Drive",
        },
        { key: "2", label: "Deliver" },
      ],
    },
    {
      text: "Business",
      type: ButtonVariant.Text,
      buttonConfig: buttonConfig.whiteTransparentButton,
    },
    {
      text: "Uber eats",
      type: ButtonVariant.Text,
      buttonConfig: buttonConfig.whiteTransparentButton,
    },
    {
      text: "About",
      iconPosition: "end",
      icon: "DownOutlined",
      activeIcon: "UpOutlined",
      type: ButtonVariant.Text,
      buttonConfig: buttonConfig.whiteTransparentButton,
    },
  ],
  rightSideButtons: [
    {
      text: "EN",
      icon: "GlobalOutlined",
      iconPosition: "start",
      type: ButtonVariant.Text,
      buttonConfig: buttonConfig.whiteTransparentButton,
    },
    {
      text: "Help",
      type: ButtonVariant.Text,
      buttonConfig: buttonConfig.whiteTransparentButton,
    },
    {
      text: "Log in",
      type: ButtonVariant.Text,
      buttonConfig: buttonConfig.whiteTransparentButton,
    },
    {
      text: "Sign up",
      type: ButtonVariant.Primary,
      buttonConfig: buttonConfig.whiteBgButton,
    },
  ],
};
