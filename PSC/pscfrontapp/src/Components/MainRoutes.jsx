import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Notes from "./Notes";
import SignUp from "./SignUp";
const MainRoutes = () => {
  return (
    <div>
      <Routes>
      
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="/notes" element={<Notes></Notes>}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
