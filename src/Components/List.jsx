import React from "react";
import AdminListe from "./AdminListe";
import UpdateAdmin from "./UpdateAdmin";
import { useSelector } from "react-redux";

const List = () => {
  const isUpdating = useSelector((state) => state.adminRedu.isUpdating);
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      {!isUpdating && <AdminListe />}
      {isUpdating && <UpdateAdmin />}
    </div>
  );
};

export default List;
