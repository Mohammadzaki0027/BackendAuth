import { useState } from "react";

import "./App.css";
import MainRoutes from "./Components/MainRoutes";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <MainRoutes></MainRoutes>
    </div>
  );
}

export default App;
