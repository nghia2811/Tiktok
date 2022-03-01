import "./App.css";
import { Route, Routes, NavLink, BrowserRouter } from "react-router-dom";
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
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/stuff">Stuff</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <div className="content">
          <Routes>
            <Route path="/" component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/contact" component={Contact} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
