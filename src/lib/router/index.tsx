import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Layouts
import { MainLayout } from "src/components/layouts";

// Pages
import { Custom404Page, HelpPage, HomePage } from "src/pages";
import DonatePage from "src/pages/donate";
import SinglePage from "src/pages/single";

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
        </Route>

        {/* Auth layout */}

        {/* 404 */}
        <Route path="*" element={<Custom404Page />} />
      </Routes>
    </Router>
  );
}

export default RouterProvider;
