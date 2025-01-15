export const addAdmin = (payload) => {
  return{
    type: 'ADD_ADMIN',
    payload,
  }
}

export const deleteAdmin = (id) => {
  return {
    type: "DELETE_ADMIN",
    payload:id,
  };
};

export const startUpdate = () => {
  return {
    type: "START_UPDATE",
  };
}

export const selectForUpdate = (id) => {
  return {
    type: "UPDATED_ADMIN",
    payload:id,
  };
};

export const updateAdmin = (admin) => {
  return {
    type: "UPDATE_ADMIN",
    payload: admin,
  };
};

export const exitUpdate = () => {
  return {
    type: "EXIT_UPDATE",
  };
};