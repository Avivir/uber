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
  hasSubMenu: boolean;
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
      hasSubMenu: false,
      buttonConfig: buttonConfig.whiteTransparentButton,
    },
    {
      text: "Earn",
      type: ButtonVariant.Text,
      icon: "DownOutlined",
      activeIcon: "UpOutlined",
      hasSubMenu: true,
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
      hasSubMenu: false,
      buttonConfig: buttonConfig.whiteTransparentButton,
    },
    {
      text: "Uber eats",
      type: ButtonVariant.Text,
      hasSubMenu: false,
      buttonConfig: buttonConfig.whiteTransparentButton,
    },
    {
      text: "About",
      iconPosition: "end",
      icon: "DownOutlined",
      activeIcon: "UpOutlined",
      type: ButtonVariant.Text,
      hasSubMenu: true,
      buttonConfig: buttonConfig.whiteTransparentButton,
      subMenu: [
        {
          key: "1",
          label: "About us",
        },
        { key: "2", label: "Our offering" },
        { key: "3", label: "How Uber works" },
        { key: "4", label: "Sustainability" },
        {
          key: "5",
          label: "Explore",
          children: [
            {
              key: "11",
              label: "Cities",
              children: [
                { key: "12", label: "Getting around Warsaw" },
                { key: "13", label: "Getting around Krakow" },
                { key: "14", label: "Getting around Poznań" },
                { key: "15", label: "Getting around Wrocław" },
                { key: "16", label: "Getting around Gdańsk" },
                { key: "17", label: "Getting around Łódź" },
                { key: "18", label: "Getting around Lublin" },
              ],
            },
          ],
        },
        { key: "6", label: "Newsroom" },
        { key: "7", label: "Investor relations" },
        { key: "8", label: "Autonomus" },
        { key: "9", label: "Blog" },
        { key: "10", label: "Careers" },
      ],
    },
  ],
  rightSideButtons: [
    {
      text: "EN",
      icon: "GlobalOutlined",
      iconPosition: "start",
      hasSubMenu: false,
      type: ButtonVariant.Text,
      buttonConfig: buttonConfig.whiteTransparentButton,
    },
    {
      text: "Help",
      type: ButtonVariant.Text,
      hasSubMenu: false,
      buttonConfig: buttonConfig.whiteTransparentButton,
    },
    {
      text: "Log in",
      type: ButtonVariant.Text,
      hasSubMenu: false,
      buttonConfig: buttonConfig.whiteTransparentButton,
    },
    {
      text: "Sign up",
      type: ButtonVariant.Primary,
      hasSubMenu: false,
      buttonConfig: buttonConfig.whiteBgButton,
    },
  ],
};
