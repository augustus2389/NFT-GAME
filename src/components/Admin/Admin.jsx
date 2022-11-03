import React from "react";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { createProduct, editProduct, listProducts } from "./Product/Product";
import { createUser, editUser, listUsers } from "./User/Users";
import { editBlog, listBlogs } from "./Blogs/Blogs";

function AdminGame() {
  return (
    <>
      <Admin dataProvider={simpleRestProvider("http://localhost:3000")}>
        <Resource
          name="products"
          list={listProducts}
          edit={editProduct}
          create={createProduct}
        />
        <Resource
          name="users"
          list={listUsers}
          edit={editUser}
          create={createUser}
        />
        <Resource name="blogs" list={listBlogs} edit={editBlog} />
      </Admin>
    </>
  );
}

export default AdminGame;
