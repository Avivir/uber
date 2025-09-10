"use client";

import { SiUber } from "react-icons/si";
import { CustomButton } from "../antd/CustomButton";
import { menu } from "@/config/menu";
import { Dropdown } from "antd";
import { useState } from "react";

export default function Navbar() {
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    setOpenKeys(keys); // ✅ Just update directly
  };

  return (
    <div className="flex items-center justify-center bg-black h-16 px-6 w-full">
      <div className="flex justify-between w-3/4">
        <div className="flex items-center gap-3">
          <SiUber color="#FFF" size={40} />
          {menu.leftSideButtons.map((button, idx) => (
            <Dropdown
              key={idx}
              menu={{ items: button.subMenu }} // 👈 submenu items go here
              trigger={["click"]}
            >
              <div>
                <CustomButton
                  text={button.text}
                  type={button.type}
                  buttonConfig={button.buttonConfig}
                  iconPosition={button.iconPosition}
                  activeIcon={button.activeIcon}
                  icon={button.icon}
                />
              </div>
            </Dropdown>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {menu.rightSideButtons.map((button, idx) => (
            <CustomButton
              text={button.text}
              type={button.type}
              buttonConfig={button.buttonConfig}
              iconPosition={button.iconPosition}
              icon={button.icon}
              haveSideMenu={button.haveSideMenu}
              key={idx}
            ></CustomButton>
          ))}
        </div>
      </div>
    </div>
  );
}
