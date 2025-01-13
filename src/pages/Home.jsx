import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Main from "../Components/Main";
import Quiz from "../Quiz/Quiz";


const Home = () => {

  return (
    <div className="flex">
        <Sidebar />
        <Main />
    </div>
  );
};

export default Home;

