import { useState } from "react";
import { Select } from "antd";
import { Logo } from "src/assets/svg";
import { CustomButton } from "src/components/common";
import { colors } from "src/constants/theme";
import { Link } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import styles from "./header.module.scss";
import { useScreenSize } from "src/utils/useWindowSize";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const isMobile = useScreenSize(756);

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
              <div
                className={styles.burger}
                onClick={() => setOpenMenu(!openMenu)}
              >
                {openMenu ? <CloseOutlined /> : <MenuOutlined />}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${openMenu ? styles.open : ""}`}>
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
