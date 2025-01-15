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
  lastId:5,
  isUpdating: false,
  UpdatedAdmin : null,
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ADMIN":
      // create new admin
      const newAdmin = {
        id:state.lastId + 1,
        ...action.payload,
      }

      return{
        ...state,
        // add new admin to admin list
        admins: [...state.admins,newAdmin],
        // increment last id
        lastId: state.lastId + 1,
      }
    case "DELETE_ADMIN":
      return {
        ...state,
        // remove admin from admins list using filter
        admins:state.admins.filter((admin) => 
          admin.id !== action.payload  
        ),
      };
      case "START_UPDATE":
        return {
          ...state,
          isUpdating:true,
        };
      case "UPDATED_ADMIN":
        return {
          ...state,
          // find the admin from admins list
          UpdatedAdmin:state.admins.find((admin) =>
            admin.id === action.payload          
          ),
        };
      case "UPDATE_ADMIN":
        return {
          ...state,
          // change old info of an admin with new info usin map
          admins:state.admins.map((admin) => 
            admin.id === action.payload.id ? action.payload : admin          
          ),
          // stop updating
          isUpdating:false,
          // clear the updated admin
          UpdatedAdmin:null,
        };
      case "EXIT_UPDATE":
        return {
          ...state,
          // stop updating
          isUpdating:false,
        };

    default:
      return state;
  }
};
