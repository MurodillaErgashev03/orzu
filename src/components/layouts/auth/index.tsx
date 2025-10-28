import { Outlet } from "react-router-dom";
import s from "./styles.module.scss";
import images from "src/constants/images";

export default function Auth() {
  return (
    <div className={s.container}>
      <div className={s.left}>
        <div className={s.content}>
          <Outlet />
        </div>
        <div className={s.footer}>© Kotib Support 2025</div>
      </div>

      <div className={s.right} />
    </div>
  );
}
