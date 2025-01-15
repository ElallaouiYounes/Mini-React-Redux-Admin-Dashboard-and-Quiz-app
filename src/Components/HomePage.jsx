import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TbBrandRedux } from "react-icons/tb";
import { useSelector } from "react-redux";

const HomePage = () => {
  // loggedInInfo
  const {isLogged,loggedInInfo} = useSelector((state) => state.auth);


  return (
    <div className="flex flex-col w-full h-screen  items-center">
      <div className="gap-4 font-anton text-5xl text-gray-800 font-bold mb-12 mt-10 flex items-center justify-center flex-row">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <TbBrandRedux color="#764ABC" size={50} />
      </motion.div>
        <div>
          {/* logged in admin name */}
          {isLogged && <p>Welcome {loggedInInfo.fullname}</p>}

        </div>
        <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <TbBrandRedux color="#764ABC" size={50} />
      </motion.div>
      </div>
      <div>
        <p className="text-7xl font-bold mb-6 text-purply text-center">
          Explore the Power of Redux:
        </p>
        <p className="text-6xl font-bold mb-6 text-purply text-center">
          Your Admin Dashboard Awaits!
        </p>
      </div>
      <div className="text-3xl font-bold text-center">
        Supervised by Mr. Nadir Hamza
      </div>
    </div>
  );
};

export default HomePage;
