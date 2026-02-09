import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Deck from "./pages/Deck/Deck";
import About from "./pages/About/About";
import Privacy from "./pages/Privacy/Privacy";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/deck" element={<Deck />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
