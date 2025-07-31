import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Edital from "./pages/Edital";
import Termo from "./pages/Termo";
import Contrato from "./pages/Contrato";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edital" element={<Edital />} />
        <Route path="/termo" element={<Termo />} />
        <Route path="/contrato" element={<Contrato />} />
      </Routes>
    </Router>
  );
}

export default App;
