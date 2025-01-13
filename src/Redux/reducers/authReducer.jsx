const initialState = {
  isLogged: false,
  loggedInAdmin: null,
  error: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      const { email, password, admins } = action.payload;
      const admin = admins.find(
        (admin) => admin.email === email && admin.password === password
      );
      if (admin) {
        return {
          ...state,
          isLogged: true,
          loggedInAdmin: admin,
          error: false,
        };
      }else{
        return {
          ...state,
          isLogged: false,
          error: true,
        };
      }
    case "LOGOUT":
      return {
        ...state,
        isLogged: false,
      };
    default:
      return state;
  }
};
