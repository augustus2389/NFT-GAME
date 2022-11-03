// import { CountrySelect } from "@atlaskit/select";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../asset/image/logo.png";
import "./style.scss";

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
  padding: 10px;
  font-weight: 500;
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
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      address: {},
    },
  });
  const onSubmit = (data) => console.log(data);

  const [option, setOption] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => setOption(data));
  }, []);

  return (
    <FromLogin>
      <Form>
        <Logo>
          <LogoImg src={logo} />
          <Title>Sign Up</Title>
        </Logo>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="d-flex flex-column justify-content-around"
        >
          <div className="div">
            <div className="input-form">
              <div className="underline"></div>
              {/* <label>Password</label> */}
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
          </div>
          <Name>
            <div className="input-form">
              <input
                type="text"
                required
                {...register("Last name", { required: true, maxLength: 80 })}
              />
              <div className="underline"></div>
              <label>Last name</label>
            </div>
            <div className="input-form">
              <input
                type="text"
                required
                {...register("First name", { required: true, maxLength: 80 })}
              />
              <div className="underline"></div>
              <label>First name</label>
            </div>
          </Name>
          <div className="input-form">
            <input
              type="text"
              required
              {...register("Email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
            <div className="underline"></div>
            <label>Email</label>
          </div>
          <div className="input-form">
            <input type="password" required {...register("Password")} />
            <div className="underline"></div>
            <label>Password</label>
          </div>
          <ContinueButton> Continue </ContinueButton>
        </form>
        <Note>
          <Text>Don’t have an Augustus Games account? </Text>
          <Forgot to="/login">Sign In</Forgot>
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
