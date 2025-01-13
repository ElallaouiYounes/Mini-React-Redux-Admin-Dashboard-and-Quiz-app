import React, { useState, useEffect } from "react";
import { Label, NewInputContainer, NewInput, Add } from "../styled/styled-comp";
import { MdExitToApp } from "react-icons/md";
import { exitUpdate } from "../Redux/Actions/adminActions";
import { useSelector, useDispatch } from "react-redux";
import { updateAdmin } from "../Redux/Actions/adminActions";

const UpdateAdmin = () => {
  // // Fetch the selected admin data from Redux
  const adminInfo = useSelector((state) => state.adminRedu.UpdatedAdmin);

  // Initialize state with admin values (or defaults)
  const [id, setId] = useState(adminInfo.id);
  const [fullname, setFullname] = useState(adminInfo?.fullname || "");
  const [email, setEmail] = useState(adminInfo?.email || "");
  const [password, setPassword] = useState(adminInfo?.password || "");

  const dispatch = useDispatch();
  // // Sync state with admin when it changes
  useEffect(() => {
    if (adminInfo) {
      setFullname(adminInfo.fullname || "");
      setEmail(adminInfo.email || "");
      setPassword(adminInfo.password || "");

    }
  }, [adminInfo]);

  const handleChanges = (e) => {
    const { name, value } = e.target;
    if (name === "fullname") setFullname(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleUpdate = () => {
    const newAdminInfo = { id, fullname, email, password };
    // Dispatch the action with the updated admin data
    dispatch(updateAdmin(newAdminInfo));
  };

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
            <NewInput type="text" id="fullname" name="fullname" onChange={handleChanges} value={fullname} placeholder="Enter your new Fullname"/>
          </NewInputContainer>
        </div>

        {/* Email input */}
        <div>
          <Label htmlFor="email">Email : </Label>
          <NewInputContainer>
            <NewInput type="email" id="email" name="email" onChange={handleChanges} value={email} placeholder="Enter your new Email"/>
          </NewInputContainer>
        </div>

        {/* Password input */}
        <div>
          <Label htmlFor="password">Password : </Label>
          <NewInputContainer>
            <NewInput type="text" id="password" name="password" onChange={handleChanges} value={password} placeholder="Enter your new Password"/>
          </NewInputContainer>
        </div>

        {/* Update button */}
        <Add onClick={handleUpdate}>Update Admin</Add>
      </div>
    </div>
  );
};

export default UpdateAdmin;
