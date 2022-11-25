import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../asset/image/logo.png";
import "./style.scss";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "rsuite/dist/rsuite.min.css";
import axios from "axios";
import axiosClient from "../../../api/axiosClient";

const FromLogin = styled.div`
  margin: 150px auto;
  max-width: 470px;
  border: 1px solid white;
  border-radius: 20px;
  background-color: #202020;
`;

const Form = styled.div`
  padding: 20px;
  color: white;
`;

const Forgot = styled(Link)`
  margin: 20px 0;
  text-decoration: underline;
  text-align: right;
  color: white;
  &:hover {
    color: white;
  }
`;
const ContinueButton = styled.button`
  background-color: #0074e4;
  color: white;
  padding: 10px 40px;
  margin: auto;
  font-weight: 500;
  display: flex;
  outline: none;
  border-radius: 10px;
  border: none;
`;
const Note = styled.div`
  text-align: center;
  margin: 30px 0;
`;
const Text = styled.span`
  color: #ffffffb8;
  font-size: 14px;
`;
const Logo = styled.div`
  max-width: 150px;
  margin: auto;
`;
const LogoImg = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.p`
  text-align: center;
  font-size: 1.125rem;
  font-family: Brutal, sans-serif;
  font-weight: 500;
  line-height: 1.5625rem;
  letter-spacing: 0.5px;
`;
const Name = styled.div`
  display: flex;
  gap: 70px;
`;

function SignUp() {
  const navigate = useNavigate();
  const [option, setOption] = useState([]);
  const [email, setEmail] = useState(true);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => setOption(data));
  }, []);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      address: {},
    },
  });
  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => {};
  const registerOptions = {
    name: {
      required: "Name is required",
      minLength: {
        value: 3,
        message: "Name must have at least 8 words",
      },
    },
    email: { required: "Email is required" },
    lastName: {
      required: "Last Name is required",
      minLength: {
        value: 3,
        message: "Last name must have at least 3 words",
      },
    },
    firstName: {
      required: "First Name is required",
      minLength: {
        value: 3,
        message: "First name must have at least 3 words",
      },
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
  };
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setIsFetching(false);
    }, 2000);
  }, []);

  if (isFetching) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
          color: "grey.500",
        }}
      >
        <CircularProgress color="inherit" />
      </Box>
    );
  }
  const onSubmit = async (data) => {
    const emailExist = await axiosClient(`/users?Email=${data.Email}`);
    if (!emailExist.data) {
      axios.post("https://json-server-augustus-game.herokuapp.com/users", data);
      console.log(data);
      navigate("/signin");
    } else {
      setEmail(false);
    }
  };

  return (
    <FromLogin>
      <Form>
        <Logo>
          <LogoImg src={logo} />
          <Title>Sign Up</Title>
        </Logo>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Name>
            <div className="input-form">
              <input
                name="name"
                type="text"
                required
                {...register("LastName", registerOptions.lastName)}
              />

              <div className="underline"></div>
              <small className="text-danger">
                {errors?.lastName && errors.lastName.message}
              </small>
              <label>Last Name</label>
            </div>
            <div className="input-form">
              <input
                name="name"
                type="text"
                required
                {...register("FirstName", registerOptions.firstName)}
              />

              <div className="underline"></div>
              <small className="text-danger">
                {errors?.FirstName && errors.FirstName.message}
              </small>
              <label>First Name</label>
            </div>
          </Name>
          <Name>
            <div className="input-form">
              <input
                name="name"
                type="text"
                required
                {...register("DisplayName", registerOptions.name)}
              />

              <div className="underline"></div>
              <small className="text-danger">
                {errors?.name && errors.name.message}
              </small>
              <label>Display Name</label>
            </div>
          </Name>
          <Name>
            <div className="input-form">
              <input
                type="email"
                required
                name="email"
                {...register("Email", registerOptions.email)}
              />
              <small className="text-danger">
                {errors?.email && errors.email.message}
              </small>
              <div className="underline"></div>
              <label>Email</label>
            </div>
          </Name>

          <Name>
            <div className="input-form">
              <input
                type="password"
                name="password"
                required
                {...register("Password", registerOptions.password)}
              />
              <small className="text-danger">
                {errors?.password && errors.password.message}
              </small>
              <div className="underline"></div>
              <label>Password</label>
            </div>
            <div className="input-form">
              <div className="underline"></div>
              <Controller
                name="address"
                control={control}
                id="address"
                render={({ field }) => (
                  <select className="form-select" {...field}>
                    {option.map((province, index) => (
                      <option className="bgr-dark" key={index}>
                        {province.name}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
          </Name>

          <ContinueButton> Continue </ContinueButton>
        </form>

        <Note>
          <Text>Don’t have an Augustus Games account? </Text>
          <Forgot to="/signin">Sign In</Forgot>
          <div>
            <Text>Back to </Text>
            <Forgot to="/">Store</Forgot>
          </div>
        </Note>
      </Form>
    </FromLogin>
  );
}

export default SignUp;
