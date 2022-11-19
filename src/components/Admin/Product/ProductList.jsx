import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../../redux/userSlice";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchProduct } from "../../../redux/productSlice";
import AddProdcut from "./AddProduct/AddProduct";

const ActionButton = styled.div`
  display: flex;
  gap: 20px;
`;
const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: gray;
  padding-left: 320px;
`;
const ViewButton = styled.button`
  border-radius: 10px;
  font-weight: 700;
  border: none;
  padding: 10px 40px;
`;
const RemoveButton = styled.button`
  background-color: #07aff1;
  padding: 10px 30px;
  border-radius: 10px;
  border: none;
  height: 80%;
  color: white;
  font-weight: 700;
`;
const Avatar = styled.img`
  object-fit: cover;
`;
export default function ProductList() {
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
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
    { field: "title", headerName: "Title", width: 130 },
    { field: "type", headerName: "Type", width: 130 },
    { field: "publisher", headerName: "Publisher", width: 130 },
    { field: "price", headerName: "Price", width: 150 },
    { field: "date", headerName: "Price", width: 150 },
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
            <Title>Information Game</Title>
            <AddProdcut />
          </div>
          <div className="col-lg-9">
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={products}
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
