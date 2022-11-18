import { useEffect, useMemo, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import upLoadImage from "../../../uploadImage/upload";
import user from "../../../asset/image/userLogin.svg";
import { addUser } from "../../../redux/userSlice";

const OderrSummary = styled.div`
  background-color: #f2f2f2;
  border-radius: 4px;
  overflow-y: auto;
  height: 500px;
`;
const FormHook = styled.form`
  display: flex;
  margin: 10px 90px;
  gap: 30px;
  width: 50%;
  flex-direction: column;
`;
const InputForm = styled.input`
  padding: 10px 20px;
  border-radius: 4px;
  ::placeholder {
  }
`;
const Avatart = styled.img`
  width: 200px;
  object-fit: cover;
  height: 200px;
  border-radius: 50%;
`;
const Information = styled.span`
  padding: 0 425px;
`;
function MyVerticallyCenteredModal(props) {
  const [country, setCountry] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => setCountry(data));
  }, []);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const resImageUrl = await upLoadImage(avatar);
    console.log(resImageUrl);
    let imageUrl = [
      `//images.weserv.nl?url=http://103.237.147.34:8888${resImageUrl}`,
    ];
    let newUser = {
      LastName: data.LastName,
      FirstName: data.FirstName,
      Email: data.Email,
      Password: data.Password,
      address: data.address,
      avatar: imageUrl,
    };
    dispatch(addUser(newUser));
  };
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <p>New User</p>
          <Information>INFORMATION ACCOUNT</Information>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <OderrSummary>
          <div className="row">
            <div className="col-lg-3">
              <Avatart
                src={avatar ? URL.createObjectURL(avatar) : user}
                alt=""
              />
              <label htmlFor="file">
                <input
                  id="file"
                  type="file"
                  onChange={(e) => setAvatar(e.target.files[0])}
                />
              </label>
            </div>
            <div className="col-lg-9">
              <div>
                <FormHook onSubmit={handleSubmit(onSubmit)}>
                  <InputForm
                    type="text"
                    placeholder="First name"
                    {...register("FirstName", {
                      required: true,
                      maxLength: 80,
                    })}
                  />
                  <InputForm
                    type="text"
                    placeholder="Last name"
                    {...register("LastName", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  <InputForm
                    type="text"
                    placeholder="Email"
                    {...register("Email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  <Controller
                    name="address"
                    control={control}
                    id="address"
                    render={({ address }) => (
                      <select className="form-select" {...address}>
                        {country.map((province, index) => (
                          <option key={index}>{province.name}</option>
                        ))}
                      </select>
                    )}
                  />
                  <InputForm
                    type="password"
                    placeholder="Password"
                    {...register("Password", {
                      required: true,
                      min: 6,
                      maxLength: 18,
                    })}
                  />

                  <input type="submit" />
                </FormHook>
              </div>
            </div>
          </div>
        </OderrSummary>
      </Modal.Body>
    </Modal>
  );
}

function AddUser() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        style={{ float: "right", margin: "20px 0" }}
        variant="primary"
        onClick={() => setModalShow(true)}
      >
        Add User
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default AddUser;
