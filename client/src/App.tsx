import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import Landing from "./pages/Landing/Landing";
import Destination from "./pages/Destination/Destination";
import Budget from "./pages/Budget/Budget";
import Duration from "./pages/Duration/Duration"; 
import Interests from "./pages/Interests/Interests";
import Results from "./pages/Results/Results";
import NoPage from "./pages/NoPage/NoPage";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/duration" element={<Duration />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
