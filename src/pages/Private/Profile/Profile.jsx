import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { editUser } from "../../../redux/userSlice";

const Profiles = styled.div`
  padding: 20px;
`;
const TitleAccount = styled.h3`
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
`;
const Text = styled.p`
  color: gray;
`;
const Name = styled.div`
  display: flex;
  gap: 85px;
`;
const Input = styled.input`
  width: 250px;
`;
function Profile() {
  const [option, setOption] = useState([]);
  const dispatch = useDispatch();
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
  const onSubmit = (data) => {
    // const a = dispatch(editUser(data));
    // console.log(a);
    // const editUser = account.find((user) => user.id === id);
  };

  return (
    <section id="profile">
      <div className="container">
        <Profiles>
          <TitleAccount>Account setting</TitleAccount>
          <Text>Manage your account’s details.</Text>
          <TitleAccount>ACCOUNT INFORMATION</TitleAccount>
          <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="bg-light ">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Name>
                      <div className="mb-3">
                        <label className="col-form-label">Last Name</label>
                        <Input
                          type="text"
                          id="name"
                          className="form-control"
                          {...register("LastName")}
                        />
                      </div>
                      <div className="ms-3">
                        <label className="col-form-label">First Name</label>
                        <Input
                          type="text"
                          id="email"
                          className="form-control"
                          {...register("FirstName")}
                        />
                      </div>
                    </Name>
                    <div className="mb-3">
                      <label className="col-form-label">Email</label>
                      <input
                        type="text"
                        id="phone"
                        className="form-control"
                        {...register("Email")}
                      />
                    </div>{" "}
                    <div className="mb-3">
                      <label className="col-form-label">Password</label>
                      <input
                        type="password"
                        id="phone"
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
                          <select className="form-select" {...field}>
                            {option.map((province, index) => (
                              <option key={index}>{province.name}</option>
                            ))}
                          </select>
                        )}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Avatar</label>
                      <div className="avatar-preview mb-3 rounded">
                        <img
                          src=""
                          alt="avatar"
                          id="avatar-preview"
                          className="rounded"
                        />
                      </div>

                      <label htmlFor="avatar" className="btn btn-warning">
                        Đổi avatar
                      </label>
                      <input type="file" id="avatar" className="d-none" />
                    </div>
                    <div className="mb-3">
                      <label className="col-form-label">Password</label>
                      <div className="">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#modal-change-password"
                        >
                          Đổi mật khẩu
                        </button>
                        <button
                          className="btn btn-warning"
                          id="btn-forgot-password"
                        >
                          Quên mật khẩu
                        </button>
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <button className="btn btn-secondary btn-back">
                        Quay lại
                      </button>
                      <button className="btn btn-success" id="btn-save">
                        Cập nhật
                      </button>
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
    </section>
  );
}

export default Profile;
