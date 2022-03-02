import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./home";
import Stuff from "./stuff";
import Contact from "./contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ padding: 20 }}>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/stuff">Stuff</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stuff" element={<Stuff />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
