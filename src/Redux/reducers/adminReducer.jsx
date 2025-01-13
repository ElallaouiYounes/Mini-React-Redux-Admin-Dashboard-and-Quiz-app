const initialState = {
  admins: [
    {
      id: 1,
      fullname: "Elallaoui Younes",
      email: "elallaoui.younes@gmail.com",
      password: "younes123",
    },
    {
      id: 2,
      fullname: "Bouguarne Yassine",
      email: "bouguarne.yassine@gmail.com",
      password: "yassine123",
    },
    {
      id: 3,
      fullname: "Karam Hasfa",
      email: "karam.hafsa@gmail.com",
      password: "hafsa123",
    },
    {
      id: 4,
      fullname: "Hannas Ayoub",
      email: "hannas.ayoub@gmail.com",
      password: "ayoub123",
    },
    {
      id: 5,
      fullname: "Alaoui Ismaili Douaa",
      email: "alaoui.ismaili.douaa@gmail.com",
      password: "douaa123",
    },
  ],
  isUpdating: false,
  UpdatedAdmin : null,
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ADMIN":
      const newAdmin = {
        id: state.admins.length + 1,
        ...action.payload,
      };
      return {
        ...state,
        admins: [...state.admins, newAdmin],
      };
    case "DELETE_ADMIN":
      return {
        ...state,
        admins: state.admins.filter((admin) => admin.id !== action.payload),
      };
      case "START_UPDATE":
        return {
          ...state,
          isUpdating: true,
        };
      case "UPDATED_ADMIN":
        return {
          ...state,
          UpdatedAdmin: state.admins.find((admin) => admin.id === action.payload),
        };
      case "UPDATE_ADMIN":
        return {
          ...state,
          isUpdating: false,
          UpdatedAdmin: null,
          admins: state.admins.map((admin)=>
            admin.id === action.payload.id ? action.payload : admin),
        };
      case "EXIT_UPDATE":
        return {
          ...state,
          isUpdating: false,
        };

    default:
      return state;
  }
};
