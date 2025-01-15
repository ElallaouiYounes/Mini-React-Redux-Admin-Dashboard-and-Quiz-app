const initialState = {
  adminDashbord: true, 
  showAdminList: false, 
  showAddAdmin: false,
  updateAdmin: false,
  quiz: false, 
};

export const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADMIN_DASHBOARD": 
      return {
        ...state,
        adminDashbord: true,
        showAdminList: false,
        showAddAdmin: false,
        updateAdmin: false,
        quiz: false,
      };
    case "SHOW_ADMIN_LIST": 
      return {
        ...state,
        adminDashbord: false,
        showAdminList: true,
        showAddAdmin: false,
        updateAdmin: false,
        quiz: false,
      };
    case "SHOW_ADD_ADMIN": 
      return {
        ...state,
        adminDashbord: false,
        showAdminList: false,
        showAddAdmin: true,
        updateAdmin: false,
        quiz: false,
      };

    case "QUIZ": 
      return {
        ...state,
        adminDashbord: false,
        showAdminList: false,
        showAddAdmin: false,
        updateAdmin: false,
        quiz: true,
      };
    default:
      return state; 
  }
};
