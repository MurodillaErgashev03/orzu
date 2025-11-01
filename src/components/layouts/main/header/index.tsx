import { useState } from "react";
import { Select } from "antd";
import { Logo } from "src/assets/svg";
import { CustomButton } from "src/components/common";
import { colors } from "src/constants/theme";
import { Link } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import styles from "./header.module.scss";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.absolute}>
        <div className="container">
          <div className={styles.content}>
            <Link to={"/"}>
              <Logo />
            </Link>

            <div className={styles.leftBlock}>
              <Select
                defaultValue="UZ"
                options={[
                  { value: "UZ", label: "UZ" },
                  { value: "RU", label: "RU" },
                  { value: "ENG", label: "ENG" },
                ]}
              />
              <CustomButton
                borderColor={colors.black}
                bg={colors.black}
                textColor={colors.white}
              >
                пожертвовать
              </CustomButton>
            </div>

            {/* Burger icon */}
            <div
              className={styles.burger}
              onClick={() => setOpenMenu(!openMenu)}
            >
              {openMenu ? <CloseOutlined /> : <MenuOutlined />}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${styles.mobileMenu} ${
          openMenu ? styles.open : ""
        }`}
      >
        <Select
          defaultValue="UZ"
          options={[
            { value: "UZ", label: "UZ" },
            { value: "RU", label: "RU" },
            { value: "ENG", label: "ENG" },
          ]}
        />

        <CustomButton
          borderColor={colors.black}
          bg={colors.black}
          textColor={colors.white}
        >
          пожертвовать
        </CustomButton>
      </div>
    </header>
  );
}

export default Header;
