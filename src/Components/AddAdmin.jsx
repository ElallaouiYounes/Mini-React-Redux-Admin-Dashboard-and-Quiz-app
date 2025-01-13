import React, { useEffect, useState } from "react"; 
import { Label, NewInputContainer, NewInput, Add, ErrorContainer, SuccesContainer } from "../styled/styled-comp";
import { useDispatch } from "react-redux";
import { addAdmin } from "../Redux/Actions/adminActions";

const AddAdmin = () => {

  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [succes, setSucces] = useState(false);


  const dispatch = useDispatch();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleAddAdmin = () => {
    if (fullname && email && password) {
      // Dispatch the action with the new admin data
      dispatch(addAdmin({ fullname, email, password }));

      setSucces(true);
      setTimeout(() => {
        setSucces(false);
      }, 2000);

      // Reset form after adding admin
      setFullname("");
      setEmail("");
      setPassword("");
      setShowError(false);
    } 
    else {
      if (fullname === "" && email === "" && password === "") {
        setError("All fields are required");
        setShowError(true);
      }
      else if (fullname === "" && email === "" && password === password) {
        setError("Fullname and Email is required");
        setShowError(true);
      }
      else if (fullname === "" && email === email && password === "") {
        setError("Fullname and Password is required");
        setShowError(true);
      }
      else if (fullname === fullname && email === "" && password === "") {
        setError("Email and Password are required");
        setShowError(true);
      }
      else if (fullname === "" && email === email && password === password) {
        setError("Fullname is required");
        setShowError(true);
      }
      else if (fullname === fullname && email === "" && password === password) {
        setError("Email is required");
        setShowError(true);
      }
      else if (fullname === fullname && email === email && password === "") {
        setError("Password is required");
        setShowError(true);
      }
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault(); 
        handleAddAdmin();
      }
    };
  
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [fullname, email, password]);
  
  return (
    <div className="flex flex-col w-[100%] h-screen items-center justify-center mb-20">
      <div className="text-5xl font-bold mb-6 text-purply">Add Admin</div>

      {/* error field */}
        {showError && <ErrorContainer>
          <p>{error}</p>
        </ErrorContainer>}

      {/* succes field */}
      {succes && <SuccesContainer>
        <p>Admin Added Successfully</p>
      </SuccesContainer>}

      {/* Add admin form */}
      <div className="flex flex-col gap-4">
        {/* Fullname input */}
        <div>
          <Label htmlFor="fullname">Full Name : </Label>
          <NewInputContainer>
            <NewInput
              type="text"
              id="fullname"
              placeholder="Enter your Full Name"
              value={fullname} // Bind state to input field
              onChange={(e) => setFullname(e.target.value)} // Update state on change
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
              placeholder="Enter your Email"
              value={email} // Bind state to input field
              onChange={(e) => setEmail(e.target.value)} // Update state on change
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
              placeholder="Enter your Password"
              value={password} // Bind state to input field
              onChange={(e) => setPassword(e.target.value)} // Update state on change
            />
          </NewInputContainer>
        </div>

        {/* Add button */}
        <Add onClick={handleAddAdmin}>Add Admin</Add>
      </div>
    </div>
  );
};

export default AddAdmin;
