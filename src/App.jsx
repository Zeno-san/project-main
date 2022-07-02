import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, Checkin, Checkout, Acquisitions, Patrons, } from "./Pages/index"
import NavbarSimple from "./comps/Navbar";
import Login from "./Pages/Login";
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="start"></div>
        
        {/* <NavbarSimple /> */}
        <Routes>
          
          <Route path = "/" element = { <Login />} />
          <Route path = "/home" element = { <Home />} />
          <Route path = "/check-in" element = {<Checkin />} />
          <Route path = "/check-out" element = {<Checkout />} />
          <Route path = "/acquisitions" element = {<Acquisitions />} />
          <Route path = "/patrons" element = {<Patrons />} />
        </Routes>
      </BrowserRouter> 
     
     
     
    </div>
  );
}

export default App;
