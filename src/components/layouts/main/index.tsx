import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { scrollToTop } from "src/utils";
import Header from "./header";
import Footer from "./footer";

function Main() {
  // Scroll to top when route changes
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return (
    <div>
      <div>
        <Header />
      </div>
      {/* <Outlet />
      <div>
        <Footer />
      </div> */}
    </div>
  );
}

export default Main;
