import "./App.scss";
import Tab1 from "./tab1";
import Tab2 from "./tab2";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <ul>
          <Link to="/tab1" className="tab1">
            Tab-1
          </Link>
          <Link to="/tab2" className="tab2">
            Tab-2
          </Link>
        </ul>
        <Routes>
          <Route path="/tab1" element={<Tab1 />} />
          <Route path="/tab2" element={<Tab2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
