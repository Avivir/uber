import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

export default function LanguageSelection() {
  return (
    <div className="flex justify-center items-center mt-12 w-full h-auto">
      <div className="w-4/5 flex flex-col justify-center items-center">
        <div className="flex w-full justify-end">
          <Button
            type="text"
            shape="circle"
            size="large"
            icon={<CloseOutlined />}
          />
        </div>
        <div>
          <h2>Select your prefered language</h2>
        </div>
        <div className="mt-12 flex justify-start">
          <Button className="w-xs text-left" type="text">
            <div className="flex items-center text-left px-4">English</div>
          </Button>

          <Button className="w-xs text-left" type="text">
            <p className="w-full text-left">English</p>
          </Button>
          <Button className="w-xs text-left" type="text">
            <p className="w-full text-left">English</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
