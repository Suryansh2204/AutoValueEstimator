import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Predictor from "./pages/Predictor/Predictor";
function App() {
  return (
    <div className="App">
      {/* routes for the pages */}
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Predictor />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
