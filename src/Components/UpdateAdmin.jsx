import React, { useState } from "react";
import {
  Label,
  NewInputContainer,
  NewInput,
  Add,
} from "../styled/styled-comp";
import { MdExitToApp } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { exitUpdate, updateAdmin } from "../Redux/Actions/adminActions";




const UpdateAdmin = () => {
  // Fetch the selected admin info
  const {UpdatedAdmin} = useSelector((state) => state.adminRedu);

  // fill state with admin info or keep them emty if there isn't any info
  const [id, setId] = useState(UpdatedAdmin.id);
  const [fullname, setFullname] = useState(UpdatedAdmin.fullname);
  const [email, setEmail] = useState(UpdatedAdmin.email);
  const [password, setPassword] = useState(UpdatedAdmin.password);

  const handleFulname = (e) => {
    setFullname(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // declare dispatch
  const dispatch = useDispatch();
  const handleUpdate = () => {
    // put new admin info in one object to send them as payload
    const adminChangesInfo = {id,fullname,email,password}
    // Dispatch the action with the updated admin data
    dispatch(updateAdmin(adminChangesInfo))
  };

  // dispatch exit action
  const handleExit = () => {
    dispatch(exitUpdate());
  };

  return (
    <div className="flex flex-col w-[100%] h-screen items-center justify-center mb-20">
      {/* Exit */}
      <div
        className="flex items-center gap-2 text-white bg-red-400 py-1 px-4 rounded-sm cursor-pointer absolute left-72 top-32 justify-center font-semibold text-[18px]"
        onClick={handleExit}
      >
        <button>Back</button>
        <MdExitToApp size={22} />
      </div>
      {/* Title */}
      <div className="text-5xl font-bold mb-6 text-purply">Update Admin</div>

      <div className="flex flex-col gap-4">
        {/* Fullname input */}
        <div>
          <Label htmlFor="fullname">Full Name : </Label>
          <NewInputContainer>
            <NewInput
              type="text"
              id="fullname"
              name="fullname"
              onChange={handleFulname}
              value={fullname}
              placeholder="Enter your new Fullname"
            />
          </NewInputContainer>
        </div>

        {/* Email input */}
        <div>
          <Label htmlFor="email">Email : </Label>
          <NewInputContainer>
            <NewInput
              type="email"
              id="email"
              name="email"
              onChange={handleEmail}
              value={email}
              placeholder="Enter your new Email"
            />
          </NewInputContainer>
        </div>

        {/* Password input */}
        <div>
          <Label htmlFor="password">Password : </Label>
          <NewInputContainer>
            <NewInput
              type="text"
              id="password"
              name="password"
              onChange={handlePassword}
              value={password}
              placeholder="Enter your new Password"
            />
          </NewInputContainer>
        </div>

        {/* Update button */}
        <Add onClick={handleUpdate}>Update Admin</Add>
      </div>
    </div>
  );
};

export default UpdateAdmin;
