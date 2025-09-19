import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import i18n from "@/i18n";

export default function LanguageSelection() {
  const changeLanguageHandel = (lng: string) => {
    i18n.changeLanguage(lng);
  };
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
          <p
            onClick={() => changeLanguageHandel("en")}
            className="hover:bg-[#d1d1cc73] p-6 w-3xs rounded-xl"
          >
            English
          </p>
          <p
            onClick={() => changeLanguageHandel("pl")}
            className="hover:bg-[#d1d1cc73] p-6 w-3xs rounded-xl"
          >
            Polish
          </p>
          <p
            onClick={() => changeLanguageHandel("de")}
            className="hover:bg-[#d1d1cc73] p-6 w-3xs rounded-xl"
          >
            German
          </p>
        </div>
      </div>
    </div>
  );
}
