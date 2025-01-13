import React from 'react';
import styled from "styled-components";
import { TbBrandRedux } from "react-icons/tb";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { adminDashboard, showAddAdmin, showAdminList, quiz } from "../Redux/Actions/navActions";
import { exitUpdate } from "../Redux/Actions/adminActions";

const Dovery = styled.div`
  width: 20%;
  height: 100dvh;
  border-right: 1px solid gray;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;
const SidDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 60px;
    width: 100%;
    align-items: center;
`;
const Button = styled.button`
width: 80%;
height: 40px;
background-color: #764ABC;
color: white;
border: none;
border-radius: 5px;
font-weight: bolder;
font-size: larger;
cursor: pointer;
&:hover{
    background-color: transparent;
    border: 1px solid #764ABC;
    color: #764ABC;
}
`;

const Sidebar = () => {
  const dispatch = useDispatch();

  // Correctly dispatching actions
  const handlAdminList = () => {
    dispatch(showAdminList());
    dispatch(exitUpdate())
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
        <Button onClick={handleAdminDashbord}>Dashbord</Button>
        <Button onClick={handlAdminList}>Admins List</Button>
        <Button onClick={handleAddAdmin}>Add Admin</Button>
        <Button onClick={handleQuiz}>Quiz</Button>
      </SidDiv>
    </Dovery>
  );
};

export default Sidebar;
