import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../../redux/userSlice";
import styled from "styled-components";
import AddUser from "./AddUser/AddUser";
import EditUser from "./EditUser/EditUser";
import { Link } from "react-router-dom";

const ActionButton = styled.div`
  display: flex;
  gap: 20px;
`;

const ViewButton = styled.button`
  border-radius: 10px;
  font-weight: 700;
  border: none;
`;
const RemoveButton = styled.button`
  background-color: #07aff1;
  padding: 10px 30px;
  border-radius: 10px;
  border: none;
  height: 80%;
  margin-top: 20px;
  color: white;
  font-weight: 700;
`;
const Avatar = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 50px;
  height: 50px;
`;
export default function UserState() {
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleRemoveUser = (id) => {
    dispatch(removeUser(id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 70,
      renderCell: (params) => {
        return (
          <div>
            <Avatar src={params.row.avatar} alt="" />
          </div>
        );
      },
    },
    { field: "FirstName", headerName: "First name", width: 130 },
    { field: "LastName", headerName: "Last name", width: 130 },
    { field: "address", headerName: "Address", width: 130 },
    { field: "Email", headerName: "Email", width: 300 },
    {
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <ActionButton>
            <ViewButton>
              <Link to={`/${params.id}`}>Edit</Link>
            </ViewButton>
            <RemoveButton onClick={() => handleRemoveUser(params.id)}>
              Delete
            </RemoveButton>
          </ActionButton>
        );
      },
    },
  ];
  return (
    <section id="admin">
      <div className="container">
        <div className="row">
          <div>
            <AddUser />
          </div>
          <div className="col-lg-9">
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={users}
                disableSelectionOnClick={false}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
