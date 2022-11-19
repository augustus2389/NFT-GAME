import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function EditUser() {
  const { users } = useSelector((state) => state.user);
  const { useId } = useParams();
  const [user, setUser] = useState(() => {
    return users.find((e) => e.id === +useId);
  });
  return <div>EditUser</div>;
}

export default EditUser;
