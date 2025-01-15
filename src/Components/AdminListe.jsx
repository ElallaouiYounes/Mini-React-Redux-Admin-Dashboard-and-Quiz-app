import React, { useState } from "react";
import { Delete, Update, SuccesContainer } from "../styled/styled-comp";
import { useSelector,useDispatch } from "react-redux";
import { deleteAdmin, selectForUpdate, startUpdate } from "../Redux/Actions/adminActions";


const AdminListe = () => {
  const [succes, setSucces] = useState(false);

  // Bring list admins from adminReducer
  const admins = useSelector((state) => state.adminRedu.admins)
 
  // declare dispatch
  const dispatch = useDispatch();

  // dispatch delete admin
  const handleDelete = (id) => {
    dispatch(deleteAdmin(id))

    setSucces(true);
    setTimeout(() => {
      setSucces(false);
    }, 2000);
  };

  // dispatch action startUpdate
  const handleStartUpdate = () => {
    dispatch(startUpdate())
  };

  // dispatch select admin
  const handleSelectedAdmin = (id) => {
  dispatch(selectForUpdate(id))
  };

  return (
    <div>
      {/* Title */}
      <div className="text-5xl font-bold mb-6 text-purply w-[100%] flex justify-center">
        Admins List
      </div>

      {/* Success field */}
      {succes && (
        <div className="w-[100%] flex justify-center">
          <SuccesContainer className="mb-4">
            <p>Admin Deleted Successfully</p>
          </SuccesContainer>
        </div>
      )}

      <table className="table-auto">
        <thead>
          <tr>
            <th className="border-2 border-purply px-4 py-2">ID</th>
            <th className="border-2 border-purply px-4 py-2">Name</th>
            <th className="border-2 border-purply px-4 py-2">Email</th>
            <th className="border-2 border-purply px-4 py-2">Password</th>
            <th className="border-2 border-purply px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* map list of admins */}
 
            {admins.map((admin) => (
              <tr key={admin.id}>
              <td className="border-2 border-purply px-4 py-2">
                {/* admin id */}
                {admin.id}
              </td>
              <td className="border-2 border-purply px-4 py-2">
                {/* admin fullname */}
                {admin.fullname}
              </td>
              <td className="border-2 border-purply px-4 py-2">
                {/* admin email */}
                {admin.email}
              </td>
              <td className="border-2 border-purply px-4 py-2">
                {/* admin password */}
                {admin.password}
              </td>
              <td className="border-2 border-purply px-4 py-2">
                <Update
                  onClick={() => {
                    handleStartUpdate();
                    handleSelectedAdmin(admin.id);
                  }}
                >
                  Update
                </Update>
                <Delete onClick={() => handleDelete(admin.id)}>Delete</Delete>
              </td>
            </tr>))}

        </tbody>
      </table>
    </div>
  );
};

export default AdminListe;
