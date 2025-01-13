import { Tooltip } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/Actions/authActions";
import { useEffect } from "react";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLogged } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (!isLogged) {
      navigate("/");
    }
  }, [!isLogged, navigate]);
  return (
    <div className="flex flex-row justify-between items-center w-[100%] py-8 px-4 gap-28 h-24 bg-[#764ABC]">
      <h1 className="font-anton text-5xl font-extrabold text-white">
        Creators :{" "}
      </h1>
      <div className="flex flex-row gap-5 items-center">
        <Tooltip title="Elallaoui Younes" arrow>
          <div className="flex flex-col items-center">
            <Img src="../../public/profile.jpeg" />
          </div>
        </Tooltip>

        <Tooltip title="Karam Hafsa" arrow>
          <div className="flex flex-col items-center">
            <Img src="../../public/hafsa.jpg"></Img>
          </div>
        </Tooltip>

        <Tooltip title="Hannas Ayoub" arrow>
          <div className="flex flex-col items-center">
            <Img src="../../public/ayoub.avif"></Img>
          </div>
        </Tooltip>

        <Tooltip title="Alaoui Ismaili Douaa" arrow>
          <div className="flex flex-col items-center">
            <Img src="../../public/douaa.avif"></Img>
          </div>
        </Tooltip>

        <Tooltip title="Bouguarne Yassine" arrow>
          <div className="flex flex-col items-center">
            <Img src="../../public/yassine.avif"></Img>
          </div>
        </Tooltip>
      </div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Creators;