import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { scrollToTop } from 'src/utils';

function Main() {
  // Scroll to top when route changes
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Main;
