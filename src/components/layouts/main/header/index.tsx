import { Select } from "antd";
import { Logo } from "src/assets/svg";
import { CustomButton } from "src/components/common";
import { colors } from "src/constants/theme";
import styles from "./header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.absolute}>
        <div className="container">
          <div className={styles.content}>
            <Logo />
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
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
