const initialState = {
  isLogged:false,
  loggedInInfo:null,
  error:false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      // bring user data
      const {email,password,admins} = action.payload;
      // check if user data exists in admins list
      const admin = admins.find((admin) => 
        admin.email === email && admin.password === password   
      )

      if(admin){
        return{
          ...state,
          isLogged:true,
          loggedInInfo:admin,
        }
      }
      else{
        return{
          ...state,
          error:true,
        }
      }

    case "LOGOUT":
      return{
        ...state,
        isLogged:false,
        loggedInInfo:null,
        error:false,
      }

    default:
      return state;
  }
};
