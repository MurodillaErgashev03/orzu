import { useEffect, useState } from "react";
import { Dropdown } from "antd";
import { LANGUAGE, language } from "src/constants/storage";
import { useTranslation } from "react-i18next";
import "./selectLang.scss";

interface Props {
  visible: boolean;
}

function SelectLang({ visible }: Props) {
  const items = [
    {
      key: "uz",
      label: "Uz",
      onClick: () => handleChange("uz"),
    },
    {
      key: "ru",
      label: "Ru",
      onClick: () => handleChange("ru"),
    },
    {
      key: "en",
      label: "Eng",
      onClick: () => handleChange("en"),
    },
  ];

  //Change section
  const { i18n } = useTranslation();
  const [lan, setLan] = useState(language || "en");
  const handleChange = (val: string) => {
    i18n.changeLanguage(val);
    localStorage.setItem(LANGUAGE, val);
    setLan(val);
    window.location.reload();
  };
  useEffect(() => {}, []);
  return (
    <Dropdown
      menu={{ items }}
      arrow={{ pointAtCenter: true }}
      trigger={["click"]}
      placement="bottom"
      className={`select - language ${visible ? "visible" : ""}`}
    >
      <div onClick={(e) => e.preventDefault()}>
        <div className="select-language-wrap">
          <p style={{ color: "#000" }}>
            {items.find((el) => el.key === lan)?.label}
          </p>
        </div>
      </div>
    </Dropdown>
  );
}

export default SelectLang;
