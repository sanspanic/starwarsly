import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import NavBar from "./NavBar";
import Routes from "./Routes";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="App min-h-screen bg-black flex flex-col justify-between">
        <BrowserRouter>
          <NavBar />
          <Routes />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
