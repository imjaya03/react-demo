import React, { useState, useEffect } from "react";


import Home from "./screens/Home";
import Header from "./components/Header";


export const App = () => {

  return (
    <div>
      <Header />
      <Home />
    </div>
  );
};
