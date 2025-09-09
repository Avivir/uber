import { ConfigProvider, Button } from "antd";
import { ReactNode } from "react";
import { buttonConfig, ButtonConfig } from "@/config/buttonConfig";

interface IbuttonTypes {
  text: string;
  icon?: ReactNode;
  iconPosition?: "start" | "end";
  onClick: string;
  buttonConfig: ButtonConfig;
  type: "text" | "link" | "default" | "primary" | "dashed";
  haveSideMenu: boolean | undefined;
  sideMenu: object[];
}

export const CustomButton = ({
  text,
  icon,
  iconPosition,
  onClick,
  type = "text",
  haveSideMenu,
  sideMenu,
  buttonConfig,
}: IbuttonTypes) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorText: buttonConfig.textColor,
            primaryColor: buttonConfig.textColor,
            textHoverBg: buttonConfig.bgColorHover,
            colorPrimary: buttonConfig.bgColor,
            colorPrimaryActive: buttonConfig.bgColorActive,
            colorPrimaryHover: buttonConfig.bgColorHover,
          },
        },
      }}
    >
      <Button
        iconPosition={iconPosition}
        shape={buttonConfig.shape}
        type={type}
        icon={icon}
      >
        {text}
      </Button>
    </ConfigProvider>
  );
};
