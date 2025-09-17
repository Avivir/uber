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
          <p className="hover:bg-[#d1d1cc73] p-6 w-3xs rounded-xl">English</p>
          <p className="hover:bg-[#d1d1cc73] p-6 w-3xs rounded-xl">English</p>
          <p className="hover:bg-[#d1d1cc73] p-6 w-3xs rounded-xl">English</p>
        </div>
      </div>
    </div>
  );
}
