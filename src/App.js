import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import NavBar from "./NavBar";
import Routes from "./Routes";
import Footer from "./Footer";

function App() {
  return (
    <div className="App bg-black min-h-screen flex flex-col justify-between">
      <BrowserRouter>
        <div className="content">
          <NavBar />
          <Routes />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
