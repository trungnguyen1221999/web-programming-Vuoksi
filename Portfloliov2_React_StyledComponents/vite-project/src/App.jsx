import Header from "./assets/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ThemeProvider } from "styled-components";
import theme from "./Theme/theme";
import GlobalStyle from "./GlobalStyle/GlobalStyles";
import Container from "./assets/Container";
import Footer from "./assets/Footer";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
