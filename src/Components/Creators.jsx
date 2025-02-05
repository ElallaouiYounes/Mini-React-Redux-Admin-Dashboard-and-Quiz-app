import { Tooltip } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import { logout } from "../Redux/Actions/authActions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import younes from "../../public/profile.jpeg";
import hafsa from "../../public/hafsa.jpg";
import ayoub from "../../public/ayoub.avif";
import douaa from "../../public/douaa.avif";
import yassine from "../../public/yassine.avif";


const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid white;
`;
const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: white;
  color: #764abc;
  border: none;
  border-radius: 5px;
  font-weight: bolder;
  font-size: larger;
  cursor: pointer;
  &:hover {
    background-color: #764abc;
    color: white;
    border: 2px solid white;
  }
`;

const Creators = () => {
  // declare dispatch
  const dispatch = useDispatch();

  const handleLogout = () => {
    // dispatch logout action
    dispatch(logout())
  };

  // get is logged state
  const {isLogged} = useSelector((state) => state.auth)


  // if the user is logged out, redirect to the login page
  const navigate = useNavigate();
  useEffect(() => {
    if(!isLogged){
      navigate('/')
    }

  }, [!isLogged]);
  return (
    <div className="flex flex-row justify-between items-center w-[100%] py-8 px-4 gap-28 h-24 bg-[#764ABC]">
      <h1 className="font-anton text-5xl font-extrabold text-white">
        Creators :{" "}
      </h1>
      <div className="flex flex-row gap-5 items-center">
        <Tooltip title="Elallaoui Younes" arrow>
          <div className="flex flex-col items-center">
            <Img src={younes} />
          </div>
        </Tooltip>

        <Tooltip title="Karam Hafsa" arrow>
          <div className="flex flex-col items-center">
            <Img src={hafsa}></Img>
          </div>
        </Tooltip>

        <Tooltip title="Hannas Ayoub" arrow>
          <div className="flex flex-col items-center">
            <Img src={ayoub}></Img>
          </div>
        </Tooltip>

        <Tooltip title="Alaoui Ismaili Douaa" arrow>
          <div className="flex flex-col items-center">
            <Img src={douaa}></Img>
          </div>
        </Tooltip>

        <Tooltip title="Bouguarne Yassine" arrow>
          <div className="flex flex-col items-center">
            <Img src={yassine}></Img>
          </div>
        </Tooltip>
      </div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Creators;