import "./App.css";
import { MantineProvider } from "@mantine/core";
import theme from "@styles/theme.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@pages/Home/HomePage";

function App() {
  return (
    <>
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS></MantineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
