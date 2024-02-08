import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import Landing from "./pages/Landing/Landing";
import Budget from "./pages/Budget/Budget";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/budget" element={<Budget />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
