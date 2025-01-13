import React, { useState } from "react";
import { Delete, Update, SuccesContainer } from "../styled/styled-comp";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteAdmin,
  startUpdate,
  selectAdminForUpdate,
} from "../Redux/Actions/adminActions";

const AdminListe = () => {
  const [succes, setSucces] = useState(false);

  const Admins = useSelector((state) => state.adminRedu.admins);

  const dispatch = useDispatch();

  const handleStartUpdate = () => {
    dispatch(startUpdate());
  };

  const up = useSelector((state) => state.adminRedu.UpdatedAdmin);
  const handleSelectedAdmin = (id) => {
    dispatch(selectAdminForUpdate(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteAdmin(id));
    setSucces(true);
    setTimeout(() => {
      setSucces(false);
    }, 2000);
  };

  const handleDeleteAll = () => {
    checkedItems.forEach((id) => dispatch(deleteAdmin(id)));
    setCheckedItems([]);
    setDeleteAll(false);
  };

  const [checkedItems, setCheckedItems] = useState([]);
  const [deleteAll, setDeleteAll] = useState(false);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setCheckedItems(Admins.map((admin) => admin.id));
      setDeleteAll(true);
    } else {
      setCheckedItems([]);
      setDeleteAll(false);
    }
  };

  const handleCheckboxChange = (id) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div>
      {/* Title */}
      <div className="text-5xl font-bold mb-6 text-purply w-[100%] flex justify-center">
        Admins List
      </div>

      {/* Show Delete All button when items are selected */}
      {deleteAll && (
        <div className="font-bold w-[100%] flex justify-end">
          <Delete onClick={handleDeleteAll}>Delete All</Delete>
        </div>
      )}

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
            <th className="border-2 border-purply px-4 py-2">
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={checkedItems.length === Admins.length}
              />
            </th>
            <th className="border-2 border-purply px-4 py-2">ID</th>
            <th className="border-2 border-purply px-4 py-2">Name</th>
            <th className="border-2 border-purply px-4 py-2">Email</th>
            <th className="border-2 border-purply px-4 py-2">Password</th>
            <th className="border-2 border-purply px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Admins.map((admin) => (
            <tr key={admin.id}>
              <td className="border-2 border-purply px-4 py-2">
                <input
                  type="checkbox"
                  checked={checkedItems.includes(admin.id)}
                  onChange={() => handleCheckboxChange(admin.id)}
                />
              </td>
              <td className="border-2 border-purply px-4 py-2">{admin.id}</td>
              <td className="border-2 border-purply px-4 py-2">
                {admin.fullname}
              </td>
              <td className="border-2 border-purply px-4 py-2">
                {admin.email}
              </td>
              <td className="border-2 border-purply px-4 py-2">
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminListe;
