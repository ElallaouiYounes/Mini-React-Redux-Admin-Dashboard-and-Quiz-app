import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Main from "../Components/Main";


const Home = () => {

  return (
    <div className="flex">
        <Sidebar />
        <Main />
    </div>
  );
};

export default Home;

