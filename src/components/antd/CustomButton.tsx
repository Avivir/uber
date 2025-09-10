"use client";

import { ConfigProvider, Button } from "antd";
import { ButtonConfig } from "@/config/buttonConfig";
import * as AntIcons from "@ant-design/icons";
import { useState } from "react";

interface ButtonTypes {
  text: string;
  icon?: string;
  activeIcon?: string;
  iconPosition?: "start" | "end";
  onClick?: () => void;
  buttonConfig: ButtonConfig;
  type: "text" | "link" | "default" | "primary" | "dashed";
}

export const CustomButton = ({
  text,
  icon,
  activeIcon,
  onClick,
  iconPosition,
  type = "text",
  buttonConfig,
}: ButtonTypes) => {
  const IconComponent = icon ? (AntIcons as any)[icon] : null;
  const ActiveIconComponent = activeIcon ? (AntIcons as any)[activeIcon] : null;
  const [active, setActive] = useState(false);

  const handleOnclick = () => {
    setActive(!active);
    onClick();
  };

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
        shape={buttonConfig.shape}
        type={type}
        onClick={handleOnclick}
        icon={
          active
            ? ActiveIconComponent && <ActiveIconComponent />
            : IconComponent && <IconComponent />
        }
        iconPosition={iconPosition}
      >
        {text}
      </Button>
    </ConfigProvider>
  );
};
