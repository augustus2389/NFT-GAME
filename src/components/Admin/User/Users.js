import {
  Datagrid,
  List,
  TextField,
  Edit,
  SimpleForm,
  EditButton,
  TextInput,
  DeleteButton,
  Create,
  ImageInput,
  ImageField,
  NumberInput,
  PasswordInput,
} from "react-admin";
import "../user.scss";

export const listUsers = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <ImageField source="avatar" />
      <TextField source="email" />
      <TextField source="age" />
      <EditButton basepath="/products" />
      <DeleteButton basepath="/products" />
    </Datagrid>
  </List>
);

export const editUser = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="avatar" />
      <TextInput source="date" />
      <TextInput source="email" />
    </SimpleForm>
  </Edit>
);

export const createUser = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <NumberInput source="age" />
      <PasswordInput source="password" />
      <ImageInput
        source="avatar"
        label="Related pictures"
        labelMultiple
        accept="image/*"
        placeholder={<p>Drop your file here</p>}
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
