import { buttonConfig } from "./buttonConfig";
import { ButtonConfig } from "./buttonConfig";

enum ButtonVariant {
  Default = "default",
  Primary = "primary",
  Dashed = "dashed",
  Text = "text",
  Link = "link",
}

interface SubMenu {
  key: string;
  label: string;
  icon?: string;
  children?: SubMenu[];
}

interface ButtonProps {
  text: string;
  onClick: string;
  style: string;
  type: ButtonVariant;
  haveSubMenu: boolean;
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
      onClick: "",
      style: "",
      type: ButtonVariant.Text,
      haveSubMenu: false,
      buttonConfig: buttonConfig.whiteTransparentButton,
    },
    {
      text: "Earn",
      onClick: "",
      style: "",
      type: ButtonVariant.Text,
      icon: "DownOutlined",
      activeIcon: "UpOutlined",
      iconPosition: "end",
      buttonConfig: buttonConfig.whiteTransparentButton,
      haveSubMenu: false,
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
      onclick: "",
      style: "",
      type: ButtonVariant.Text,
      haveSubMenu: false,
      buttonConfig: buttonConfig.whiteTransparentButton,
    },
    {
      text: "Uber eats",
      onclick: "",
      style: "",
      type: ButtonVariant.Text,
      haveSubMenu: false,
      buttonConfig: buttonConfig.whiteTransparentButton,
    },
    {
      text: "About",
      onclick: "",
      style: "",
      iconPosition: "end",
      icon: "DownOutlined",
      activeIcon: "UpOutlined",
      type: ButtonVariant.Text,
      haveSubMenu: false,
      buttonConfig: buttonConfig.whiteTransparentButton,
    },
  ],
  rightSideButtons: [
    {
      text: "EN",
      onclick: "",
      style: "",
      icon: "GlobalOutlined",
      iconPosition: "start",
      type: ButtonVariant.Text,
      haveSubMenu: false,
      buttonConfig: buttonConfig.whiteTransparentButton,
    },
    {
      text: "Help",
      onclick: "",
      style: "",
      type: ButtonVariant.Text,
      haveSubMenu: false,
      buttonConfig: buttonConfig.whiteTransparentButton,
    },
    {
      text: "Log in",
      onclick: "",
      style: "",
      type: ButtonVariant.Text,
      haveSubMenu: false,
      buttonConfig: buttonConfig.whiteTransparentButton,
    },
    {
      text: "Sign up",
      onclick: "",
      style: "",
      type: ButtonVariant.Primary,
      haveSubMenu: false,
      buttonConfig: buttonConfig.whiteBgButton,
    },
  ],
};
