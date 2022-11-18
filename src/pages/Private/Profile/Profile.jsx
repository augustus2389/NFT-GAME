import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { editUser } from "../../../redux/userSlice";
import user from "../../../asset/image/userLogin.svg";
import upLoadImage from "../../../uploadImage/upload";
import { setAccountSuccess } from "../../../redux/authSlice";
import { Navigate, useNavigate } from "react-router-dom";

const Profiles = styled.div`
  padding: 20px;
`;
const TitleAccount = styled.h3`
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Name = styled.div`
  display: flex;
  gap: 85px;
`;
const Input = styled.input`
  width: 250px;
`;
const BackButton = styled.button`
  outline-color: #141414;
  background: #e6e6e6;
  color: #141414;
  border: none;
  padding: 20px;
  border-radius: 10px;
  font-weight: 700;
  margin-right: 20px;
`;
const ButtonSubmit = styled.button`
  background: #0074e4;
  outline-color: #141414;
  border: none;
  font-weight: 700;

  padding: 20px;
  border-radius: 10px;
  transition: background-color 0.3s ease-in-out;
  color: #fff;
`;

const Avatart = styled.img`
  width: 200px;
  object-fit: cover;
  height: 200px;
  border-radius: 50%;
`;
function EditProfile() {
  const [option, setOption] = useState([]);
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();
  const { account } = useSelector((state) => state.auth);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => setOption(data));
  }, []);
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      id: account.id,
      LastName: account.LastName,
      FirstName: account.FirstName,
      Email: account.Email,
      Password: account.Password,
    },
  });
  const onSubmit = async (data) => {
    const resImageUrl = await upLoadImage(avatar);
    console.log(resImageUrl);
    let imageUrl = [
      `//images.weserv.nl?url=http://103.237.147.34:8888${resImageUrl}`,
    ];
    const newUser = {
      id: data.id,
      LastName: data.LastName,
      FirstName: data.FirstName,
      Email: data.Email,
      Password: data.Password,
      avatar: imageUrl,
    };
    dispatch(editUser(newUser));
    dispatch(setAccountSuccess(newUser));
    navigate("/profile");
  };

  return (
    <section id="profile">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mt-5">
            <Avatart src={avatar ? URL.createObjectURL(avatar) : user} alt="" />
            <form action="">
              <label htmlFor="file">
                <input
                  id="file"
                  type="file"
                  onChange={(e) => setAvatar(e.target.files[0])}
                />
              </label>
            </form>
          </div>
          <div className="col-lg-8">
            <Profiles>
              <div className="container mt-5 mb-5">
                <TitleAccount>Account setting</TitleAccount>
                <div className="row">
                  <div className="col-md-6">
                    <div className="bg-light ">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <Name>
                          <div className="mb-3">
                            <label className="col-form-label">Last Name</label>
                            <Input
                              type="text"
                              id="lastName"
                              className="form-control"
                              {...register("LastName")}
                            />
                          </div>
                          <div className="ms-3">
                            <label className="col-form-label">First Name</label>
                            <Input
                              type="text"
                              id="firstName"
                              className="form-control"
                              {...register("FirstName")}
                            />
                          </div>
                        </Name>
                        <div className="mb-3">
                          <label className="col-form-label">Email</label>
                          <input
                            type="text"
                            id="email"
                            className="form-control"
                            {...register("Email")}
                          />
                        </div>{" "}
                        <div className="mb-3">
                          <label className="col-form-label">Password</label>
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                            {...register("Password")}
                          />
                        </div>
                        <div className="mb-3">
                          <label className="col-form-label">Address</label>
                          <Controller
                            name="address"
                            control={control}
                            id="address"
                            render={({ field }) => (
                              <select
                                className="form-select text-black"
                                {...field}
                              >
                                {option.map((province, index) => (
                                  <option key={index}>{province.name}</option>
                                ))}
                              </select>
                            )}
                          />
                        </div>
                        {/* <div className="mb-3">
                          <label className="col-form-label">Password</label>
                          <div className="">
                            <BackButton
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#modal-change-password"
                            >
                              Đổi mật khẩu
                            </BackButton>
                            <ButtonSubmit
                              className="btn btn-warning"
                              id="btn-forgot-password"
                            >
                              Quên mật khẩu
                            </ButtonSubmit>
                          </div>
                        </div> */}
                        <div className="text-center mt-3">
                          <BackButton>DISCARD CHANGES</BackButton>
                          <ButtonSubmit>SAVE CHANGES</ButtonSubmit>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="modal-change-password"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">
                          Đổi mật khẩu
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="mb-3">
                          <label className="col-form-label">Mật khẩu cũ</label>
                          <input
                            type="text"
                            id="old-password"
                            className="form-control"
                          />
                        </div>
                        <div className="mb-3">
                          <label className="col-form-label">Mật khẩu mới</label>
                          <input
                            type="text"
                            id="new-password"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Đóng
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          id="btn-change-password"
                        >
                          Xác nhận
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Profiles>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditProfile;
