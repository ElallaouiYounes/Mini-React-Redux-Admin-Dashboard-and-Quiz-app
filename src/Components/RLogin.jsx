import React, { useState, useEffect } from "react";
import { TbBrandRedux } from "react-icons/tb";
import {
  InputContainer,
  Input,
  Icon,
  Label,
  LoginCont,
  Button,
  ErrorContainer,
} from "../styled/styled-comp";
import { CiUser } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../Redux/Actions/authActions";

const RLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const handleChanges = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const { isLogged } = useSelector((state) => state.auth);
  const { error } = useSelector((state) => state.auth);
  const admins = useSelector((state) => state.adminRedu.admins);

  const handleLogin = () => {
    dispatch(login(inputValue.email, inputValue.password, admins));
  };

  useEffect(() => {
    if (isLogged) {
      navigate("/home");
    }
  }, [isLogged, navigate]);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-[50%] h-screen flex flex-col px-20 py-10">
      {/*  logo */}
      <div className="flex gap-2 items-center">
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
      {/*  title */}
      <p className="font-anton text-7xl font-extrabold mt-20">Get Started</p>

      {/*  form */}
      <LoginCont>
        {/*  error field */}
        {error && (
          <ErrorContainer>
            <p>Incorrect Email or Password</p>
          </ErrorContainer>
        )}

        {/*  email input */}
        <motion.div
          whileHover={{ x: [0, -1, 1, -1, 1, 0] }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Label htmlFor="email">Email</Label>
          <InputContainer>
            <Input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your Email"
              onChange={handleChanges}
            />
            <Icon>
              <CiUser size={24} />
            </Icon>
          </InputContainer>
        </motion.div>

        {/*  password input */}
        <motion.div
          whileHover={{ x: [0, -1, 1, -1, 1, 0] }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Label htmlFor="password">Password</Label>
          <InputContainer>
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter your Password"
              onChange={handleChanges}
            />
            <Icon>
              <button onClick={handleShowPassword}>
                {showPassword ? (
                  <FaRegEyeSlash size={24} />
                ) : (
                  <FaRegEye size={24} />
                )}
              </button>
            </Icon>
          </InputContainer>
        </motion.div>

        {/*  login button */}
        <Button onClick={handleLogin}>Login</Button>
      </LoginCont>
    </div>
  );
};

export default RLogin;
