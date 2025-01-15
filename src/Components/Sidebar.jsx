import React from 'react';
import styled from "styled-components";
import { TbBrandRedux } from "react-icons/tb";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { adminDashboard, showAddAdmin, showAdminList, quiz } from "../Redux/Actions/navActions";
import {Dovery,SidDiv,SButton} from '../styled/styled-comp'
import { exitUpdate } from '../Redux/Actions/adminActions';




const Sidebar = () => {
  const dispatch = useDispatch();

  const handlAdminList = () => {
    dispatch(showAdminList());
    dispatch(exitUpdate());
  };
  const handleAddAdmin = () => {
    dispatch(showAddAdmin());
  };
  const handleAdminDashbord = () => {
    dispatch(adminDashboard());
  };
  const handleQuiz = () => {
    dispatch(quiz());
  };

  return (
    <Dovery>
      {/*  logo */}
      <div className="flex gap-2 items-center pl-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          <TbBrandRedux color="#764ABC" size={40} />
        </motion.div>
        <p className="font-anton text-3xl font-semibold">Dev 201</p>
      </div>
      {/*  Components */}
      <SidDiv>
        <SButton onClick={handleAdminDashbord}>Dashbord</SButton>
        <SButton onClick={handlAdminList}>Admins List</SButton>
        <SButton onClick={handleAddAdmin}>Add Admin</SButton>
        <SButton onClick={handleQuiz}>Quiz</SButton>
      </SidDiv>
    </Dovery>
  );
};

export default Sidebar;
