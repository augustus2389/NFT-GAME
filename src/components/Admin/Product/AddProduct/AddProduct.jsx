import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import upLoadImage from "../../../../uploadImage/upload";
import user from "../../../../asset/image/userLogin.svg";
import { addUser } from "../../../../redux/userSlice";

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
const ComponentForm = styled.div`
  display: flex;
`;
const InputForm = styled.input`
  padding: 10px 10px;
  border-radius: 4px;
  ::placeholder {
  }
`;
const Avatart = styled.img`
  width: 200px;
  height: 200px;
`;
const IconGame = styled.img`
  width: 200px;
  object-fit: cover;
  height: 200px;
`;
const Information = styled.span`
  padding: 0 425px;
  white-space: nowrap;
`;
const Title = styled.p`
  white-space: nowrap;
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
          <Title>New Game</Title>
          <Information>INFORMATION ACCOUNT</Information>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <OderrSummary>
          <div className="row">
            <div className="col-lg-3">
              <IconGame
                src={
                  avatar
                    ? URL.createObjectURL(avatar)
                    : "https://images.squarespace-cdn.com/content/v1/5c38747ecef3724be70043b5/1548691340414-AG7V3910FPUOOVOWQ8T4/icon-video-games-joypad-2.png?format=300w"
                }
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
            <div className="col-lg-6">
              <div className="mt-5">
                <FormHook onSubmit={handleSubmit(onSubmit)}>
                  <ComponentForm>
                    <InputForm
                      type="text"
                      placeholder="Title"
                      {...register("title", {
                        required: true,
                        maxLength: 80,
                      })}
                    />
                    <InputForm
                      type="text"
                      className="ms-1"
                      placeholder="Publisher"
                      {...register("publisher", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                    />
                  </ComponentForm>
                  <ComponentForm className="w-100">
                    <InputForm
                      type="number"
                      placeholder="Price"
                      className="w-50"
                      {...register("LastName", {
                        required: true,
                        maxLength: 100,
                      })}
                    />
                    <InputForm
                      type="url"
                      className="ms-2"
                      placeholder="Video URl"
                      {...register("video", {
                        required: true,
                        min: 6,
                        maxLength: 18,
                      })}
                    />
                  </ComponentForm>
                  <ComponentForm>
                    <InputForm
                      type="text"
                      placeholder="Type"
                      {...register("type", {
                        required: true,
                        min: 6,
                        maxLength: 18,
                      })}
                    />

                    <InputForm
                      type="text"
                      className="ms-2"
                      placeholder="Description"
                      {...register("description", {
                        required: true,
                        min: 6,
                        maxLength: 18,
                      })}
                    />
                  </ComponentForm>
                  <ComponentForm>
                    <InputForm
                      type="text"
                      placeholder="System"
                      {...register("system", {
                        required: true,
                        min: 6,
                        maxLength: 18,
                      })}
                    />

                    <InputForm
                      type="text"
                      className="ms-2"
                      placeholder="Language"
                      {...register("language", {
                        required: true,
                        min: 6,
                        maxLength: 18,
                      })}
                    />
                  </ComponentForm>
                  <input type="submit" />
                </FormHook>
              </div>
            </div>
            <div className="col-lg-3">
              <Avatart
                src={
                  avatar
                    ? URL.createObjectURL(avatar)
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR02b2DfuwK_srPedCrBWlo7h_pPIHkJLswRA&usqp=CAU"
                }
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
          </div>
        </OderrSummary>
      </Modal.Body>
    </Modal>
  );
}

function AddProdcut() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        style={{
          float: "left",
          margin: "20px 0",
          width: "10%",
          fontWeight: "bold",
        }}
        variant="primary"
        onClick={() => setModalShow(true)}
      >
        Add Item
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default AddProdcut;
