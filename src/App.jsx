import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DocProfilePage from "./pages/DocProfilePage";
import Engagements from "./pages/Engagements";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docprofile" element={<DocProfilePage />} />
        <Route path="/engagements" element={<Engagements />} />
      </Routes>
    </Router>
  );
}

export default App;
