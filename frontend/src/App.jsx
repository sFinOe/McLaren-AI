import "./index.css";
import { MantineProvider } from "@mantine/core";
import theme from "@styles/theme.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@pages/Home/HomePage";
import UploadPage from "@pages/Upload/UploadPage";
import PreviewPage from "@pages/Preview/PreviewPage";
import ResultPage from "@pages/Result/ResultPage";

function App() {
  return (
    <>
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/preview" element={<PreviewPage />} />
            <Route path="/result" element={<ResultPage />} />
          </Routes>
        </Router>
      </MantineProvider>
    </>
  );
}

export default App;
