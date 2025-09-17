"use client";

import { SiUber } from "react-icons/si";
import { CustomButton } from "../antd/CustomButton";
import { menu } from "@/config/menu";
import { Dropdown } from "antd";
import { useState } from "react";
import LanguageSelection from "./LanguageSelection";

export default function Navbar() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(0);

  const handleMenuChange = (idx: number) => {
    setIsSubMenuOpen(idx);
  };

  return (
    <div className="h-auto">
      <div className="flex items-center justify-center bg-black h-16 px-6 w-full">
        <div className="flex justify-between w-3/4">
          <div className="flex items-center gap-3">
            <SiUber color="#FFF" size={40} />
            {menu.leftSideButtons.map((button, idx) =>
              button.subMenu ? (
                <Dropdown
                  key={idx}
                  menu={{ items: button.subMenu }}
                  trigger={["click"]}
                  onOpenChange={() => handleMenuChange(idx)}
                >
                  <div>
                    <CustomButton
                      idx={idx}
                      text={button.text}
                      type={button.type}
                      hasSubMenu={button.hasSubMenu}
                      buttonConfig={button.buttonConfig}
                      subMenuIdxTrigger={isSubMenuOpen}
                      iconPosition={button.iconPosition}
                      activeIcon={button.activeIcon}
                      icon={button.icon}
                    />
                  </div>
                </Dropdown>
              ) : (
                <CustomButton
                  key={idx}
                  idx={idx}
                  text={button.text}
                  type={button.type}
                  hasSubMenu={button.hasSubMenu}
                  buttonConfig={button.buttonConfig}
                  iconPosition={button.iconPosition}
                  activeIcon={button.activeIcon}
                  icon={button.icon}
                />
              )
            )}
          </div>

          <div className="flex items-center gap-3">
            {menu.rightSideButtons.map((button, idx) => (
              <CustomButton
                text={button.text}
                type={button.type}
                buttonConfig={button.buttonConfig}
                hasSubMenu={button.hasSubMenu}
                iconPosition={button.iconPosition}
                icon={button.icon}
                key={idx}
              ></CustomButton>
            ))}
          </div>
        </div>
      </div>
      <LanguageSelection />
    </div>
  );
}
