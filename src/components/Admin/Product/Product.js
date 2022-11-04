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
  ArrayInput,
  SimpleFormIterator,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const listProducts = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="publisher" />
      <TextField source="price" />
      <TextField source="date" />
      <TextField source="type" />
      <TextField source="language" />
      <EditButton basepath="/products" />
      <DeleteButton basepath="/products" />
    </Datagrid>
  </List>
);
export const editProduct = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <NumberInput source="price" />
      <DateTimeInput source="date" />
      <ArrayInput source="type">
        <SimpleFormIterator inline>
          <TextInput helperText={false} />
        </SimpleFormIterator>
      </ArrayInput>

      <ArrayInput source="system">
        <SimpleFormIterator inline disableAdd>
          <TextInput source="Os" helperText={false} />
          <TextInput source="Processor" helperText={false} />
          <TextInput source="Memory" helperText={false} />
          <TextInput source="Graphics" helperText={false} />
          <TextInput source="DirectX®" helperText={false} />
          <TextInput source="Storage" helperText={false} />
          <TextInput source="Sound" helperText={false} />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="language">
        <SimpleFormIterator inline>
          <TextInput helperText={false} />
        </SimpleFormIterator>
      </ArrayInput>
      <ImageInput
        source="pictures"
        label="Related pictures"
        accept="image/*"
        multiple
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export const createProduct = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="price" />
      <TextInput source="date" />
      <TextInput source="type" />
    </SimpleForm>
  </Create>
);
