import { buttonConfig } from "./buttonConfig";
import { AiOutlineDown } from "react-icons/ai";
import { ButtonConfig } from "./buttonConfig";
import { ReactNode } from "react";

enum ButtonVariant {
  Default = "default",
  Primary = "primary",
  Dashed = "dashed",
  Text = "text",
  Link = "link",
}

interface ButtonProps {
  text: string;
  onClick: string;
  style: string;
  type: ButtonVariant;
  haveSideMenu: boolean;
  sideMenu?: ButtonProps;
  buttonConfig: ButtonConfig;
  icon?: ReactNode;
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
      haveSideMenu: false,
      buttonConfig: buttonConfig.whiteTransparentButton,
    },
    {
      text: "Earn",
      onClick: "",
      style: "",
      type: ButtonVariant.Text,
      icon: <AiOutlineDown>,
      iconPosition: "end",
      buttonConfig: buttonConfig.whiteTransparentButton,
      sideMenu: [
        {
          text: "Drive",
          onclick: "",
          style: "",
          type: ButtonVariant.Text,
          haveSideMenu: false,
          sideMenu: "",
          buttonConfig: buttonConfig.whiteTransparentButton,
        },
        {
          text: "Deliver",
          onclick: "",
          style: "",
          type: ButtonVariant.Text,
          haveSideMenu: false,
          sideMenu: "",
          buttonConfig: buttonConfig.whiteTransparentButton,
        },
      ],
    },
    {
      text: "Business",
      onclick: "",
      style: "",
      type: ButtonVariant.Text,
      haveSideMenu: false,
      sideMenu: "",
      buttonConfig: buttonConfig.whiteTransparentButton,
    },
    {
      text: "Uber eats",
      onclick: "",
      style: "",
      type: ButtonVariant.Text,
      haveSideMenu: false,
      sideMenu: "",
      buttonConfig: buttonConfig.whiteTransparentButton,
    },
    {
      text: "About",
      onclick: "",
      style: "",
      type: ButtonVariant.Text,
      haveSideMenu: true,
      buttonConfig: buttonConfig.whiteTransparentButton,
      sideMenu: [
        {
          text: "About us",
          onclick: "",
          style: "",
          type: ButtonVariant.Text,
          sideMenu: "",
          buttonConfig: buttonConfig.whiteTransparentButton,
        },
        {
          text: "Our offering",
          onclick: "",
          style: "",
          type: ButtonVariant.Text,
          haveSideMenu: false,
          sideMenu: "",
          buttonConfig: buttonConfig.whiteTransparentButton,
        },
        {
          text: "How Uber Works",
          onclick: "",
          style: "",
          type: ButtonVariant.Text,
          haveSideMenu: false,
          sideMenu: "",
          buttonConfig: buttonConfig.whiteTransparentButton,
        },
        {
          text: "Sustainability",
          onclick: "",
          style: "",
          type: ButtonVariant.Text,
          haveSideMenu: false,
          sideMenu: "",
          buttonConfig: buttonConfig.whiteTransparentButton,
        },
        {
          text: "Explore",
          onclick: "",
          style: "",
          type: ButtonVariant.Text,
          haveSideMenu: true,
          buttonConfig: buttonConfig.whiteTransparentButton,
          sideMenu: [
            {
              text: "Cities",
              onclick: "",
              style: "",
              type: ButtonVariant.Text,
              haveSideMenu: true,
              buttonConfig: buttonConfig.whiteTransparentButton,
              sideMenu: [
                {
                  text: "Getting around Warsaw",
                  onclick: "",
                  style: "",
                  type: ButtonVariant.Text,
                  haveSideMenu: false,
                  buttonConfig: buttonConfig.whiteTransparentButton,
                  sideMenu: "",
                },
                {
                  text: "Getting around Kraków",
                  onclick: "",
                  style: "",
                  type: ButtonVariant.Text,
                  haveSideMenu: false,
                  buttonConfig: buttonConfig.whiteTransparentButton,
                  sideMenu: "",
                },
                {
                  text: "Getting around Poznań",
                  onclick: "",
                  style: "",
                  type: ButtonVariant.Text,
                  haveSideMenu: false,
                  buttonConfig: buttonConfig.whiteTransparentButton,
                  sideMenu: "",
                },
                {
                  text: "Getting around Wrocław",
                  onclick: "",
                  style: "",
                  type: ButtonVariant.Text,
                  haveSideMenu: false,
                  buttonConfig: buttonConfig.whiteTransparentButton,
                  sideMenu: "",
                },
                {
                  text: "Getting around Gdańsk",
                  onclick: "",
                  style: "",
                  type: ButtonVariant.Text,
                  haveSideMenu: false,
                  buttonConfig: buttonConfig.whiteTransparentButton,
                  sideMenu: "",
                },
                {
                  text: "Getting around Katowice",
                  onclick: "",
                  style: "",
                  type: ButtonVariant.Text,
                  haveSideMenu: false,
                  buttonConfig: buttonConfig.whiteTransparentButton,
                  sideMenu: "",
                },
              ],
            },
          ],
        },
        {
          text: "Newsroom",
          onclick: "",
          style: "",
          type: ButtonVariant.Text,
          haveSideMenu: false,
          buttonConfig: buttonConfig.whiteTransparentButton,
          sideMenu: "",
        },
        {
          text: "Investor relations",
          onclick: "",
          style: "",
          type: ButtonVariant.Text,
          haveSideMenu: false,
          buttonConfig: buttonConfig.whiteTransparentButton,
          sideMenu: "",
        },
        {
          text: "Autonomus",
          onclick: "",
          style: "",
          type: ButtonVariant.Text,
          haveSideMenu: false,
          buttonConfig: buttonConfig.whiteTransparentButton,
          sideMenu: "",
        },
        {
          text: "Blog",
          onclick: "",
          style: "",
          type: ButtonVariant.Text,
          haveSideMenu: false,
          buttonConfig: buttonConfig.whiteTransparentButton,
          sideMenu: "",
        },
        {
          text: "Careers",
          onclick: "",
          style: "",
          type: ButtonVariant.Text,
          haveSideMenu: false,
          buttonConfig: buttonConfig.whiteTransparentButton,
          sideMenu: "",
        },
      ],
    },
  ],
  rightSideButtons: [
    {
      text: "EN",
      onclick: "",
      style: "",
      type: ButtonVariant.Text,
      haveSideMenu: false,
      buttonConfig: buttonConfig.whiteTransparentButton,
      sideMenu: "",
    },
    {
      text: "Help",
      onclick: "",
      style: "",
      type: ButtonVariant.Text,
      haveSideMenu: false,
      buttonConfig: buttonConfig.whiteTransparentButton,
      sideMenu: "",
    },
    {
      text: "Log in",
      onclick: "",
      style: "",
      type: ButtonVariant.Text,
      haveSideMenu: false,
      buttonConfig: buttonConfig.whiteTransparentButton,
      sideMenu: "",
    },
    {
      text: "Sign up",
      onclick: "",
      style: "",
      type: ButtonVariant.Primary,
      haveSideMenu: false,
      buttonConfig: buttonConfig.whiteBgButton,
      sideMenu: "",
    },
  ],
};
