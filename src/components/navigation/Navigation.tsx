import { SiUber } from "react-icons/si";
import { CustomButton } from "../antd/CustomButton";
import { menu } from "@/config/menu";

export default function Navbar() {
  return (
    <div className="flex items-center justify-center bg-black h-16 px-6 w-full">
      <div className="flex justify-between w-3/4">
        <div className="flex items-center gap-3">
          <SiUber color="#FFF" size={40} />
          {menu.leftSideButtons.map((button, idx) => (
            <CustomButton
              text={button.text}
              type={button.type}
              haveSideMenu={button.haveSideMenu}
              key={idx}
            ></CustomButton>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {menu.rightSideButtons.map((button, idx) => (
            <CustomButton
              text={button.text}
              type={button.type}
              haveSideMenu={button.haveSideMenu}
              key={idx}
            ></CustomButton>
          ))}
        </div>
      </div>
    </div>
  );
}
