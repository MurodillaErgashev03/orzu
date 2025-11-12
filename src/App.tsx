import AntdProvider from "./lib/antd";
import AosProvider from "./lib/aos";
import ReduxProvider from "./lib/redux";
import RouterProvider from "./lib/router";
import LanguageProvider from "./lib/language";

function App() {
  return (
    <LanguageProvider>
      <ReduxProvider>
        <AntdProvider>
          <AosProvider>
            <RouterProvider />
          </AosProvider>
        </AntdProvider>
      </ReduxProvider>
    </LanguageProvider>
  );
}

export default App;
