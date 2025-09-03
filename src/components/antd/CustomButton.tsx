import { ConfigProvider, Button } from "antd";
import { IconType } from "react-icons";

interface IbuttonTypes {
  text: string;
  icon: IconType;
  onClick: string;
  type: "text" | "link" | "default" | "primary" | "dashed";
  haveSideMenu: boolean | undefined;
  sideMenu: object[];
}

export const CustomButton = ({
  text,
  icon,
  onClick,
  type = "text",
  haveSideMenu,
  sideMenu,
}: IbuttonTypes) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorBgSolidHover: "#FFF",
            colorText: "#FFF",
            textHoverBg: "#e3e3c95e",
          },
        },
      }}
    >
      <Button type={type}>{text}</Button>
    </ConfigProvider>
  );
};
