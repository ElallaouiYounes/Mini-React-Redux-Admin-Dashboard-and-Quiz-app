const initialState = {
  adminDashbord: true, // Initially, the admin dashboard is shown
  showAdminList: false, // Admin list is hidden by default
  showAddAdmin: false, // Add Admin section is hidden by default
  updateAdmin: false, // Update Admin section is hidden by default
  quiz: false, // Quiz section is hidden by default
  Uadmin: null, // Initially, there is no admin
};

export const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADMIN_DASHBOARD": // When this action is dispatched, show the admin dashboard
      return {
        ...state,
        adminDashbord: true,
        showAdminList: false,
        showAddAdmin: false,
        updateAdmin: false,
        quiz: false,
      };
    case "SHOW_ADMIN_LIST": // When this action is dispatched, show the admin list
      return {
        ...state,
        adminDashbord: false,
        showAdminList: true,
        showAddAdmin: false,
        updateAdmin: false,
        quiz: false,
      };
    case "SHOW_ADD_ADMIN": // When this action is dispatched, show the Add Admin section
      return {
        ...state,
        adminDashbord: false,
        showAdminList: false,
        showAddAdmin: true,
        updateAdmin: false,
        quiz: false,
      };
    // case "UPDATE_ADMIN": // When this action is dispatched, show the Update Admin section
    //   return {
    //     ...state,
    //     adminDashbord: false,
    //     showAdminList: false,
    //     showAddAdmin: false,
    //     updateAdmin: true,
    //     quiz: false,
    //     Uadmin: action.payload,
    //   };
    case "QUIZ": // When this action is dispatched, show the Quiz section
      return {
        ...state,
        adminDashbord: false,
        showAdminList: false,
        showAddAdmin: false,
        updateAdmin: false,
        quiz: true,
      };
    default:
      return state; // Default case when no action matches
  }
};
