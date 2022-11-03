import {
  Datagrid,
  DeleteButton,
  Edit,
  EditButton,
  List,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";
export const listBlogs = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <EditButton basepath="/products" />
      <DeleteButton basepath="/products" />
    </Datagrid>
  </List>
);

export const editBlog = (props) => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" />
    </SimpleForm>
  </Edit>
);
