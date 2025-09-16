"use client";

import { ConfigProvider, Button } from "antd";
import { ButtonConfig } from "@/config/buttonConfig";
import * as AntIcons from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
interface ButtonTypes {
  idx: number;
  text?: string;
  icon?: string;
  activeIcon?: string;
  iconPosition?: "start" | "end";
  hasSubMenu: boolean;
  subMenuIdxTrigger?: number;
  buttonConfig: ButtonConfig;
  type: "text" | "link" | "default" | "primary" | "dashed";
}

export const CustomButton = ({
  idx,
  text,
  icon,
  activeIcon,
  iconPosition,
  type = "text",
  hasSubMenu,
  buttonConfig,
  subMenuIdxTrigger,
}: ButtonTypes) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const IconComponent = icon ? (AntIcons as any)[icon] : null;
  const ActiveIconComponent = activeIcon ? (AntIcons as any)[activeIcon] : null;
  const router = useRouter();

  const handleMenuChange = () => {
    setButtonClicked(!buttonClicked);
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
        onClick={!hasSubMenu ? () => router.push(text) : handleMenuChange}
        type={type}
        icon={
          idx == subMenuIdxTrigger && buttonClicked
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
