import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Layouts
import { MainLayout } from "src/components/layouts";

// Pages
import { Custom404Page, HelpPage, HomePage } from "src/pages";
import DonatePage from "src/pages/donate";
import KidsAllCards from "src/pages/dreamkids-cards";
import Share from "src/pages/share";
import SinglePage from "src/pages/single";
import Thanks from "src/pages/thanks";

function RouterProvider() {
  return (
    <Router>
      <Routes>
        {/* Help */}
        <Route path="/help" element={<HelpPage />} />

        {/* Main Layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="single" element={<SinglePage />} />
          <Route path="donate" element={<DonatePage />} />
          <Route path="thanks" element={<Thanks />} />
          <Route path="all-cards" element={<KidsAllCards />} />
        </Route>
        <Route path="share" element={<Share />} />

        {/* Auth layout */}

        {/* 404 */}
        <Route path="*" element={<Custom404Page />} />
      </Routes>
    </Router>
  );
}

export default RouterProvider;
