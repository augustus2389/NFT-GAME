import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SignIn from "./SignIn/SignIn";

const Account = styled.div`
  margin: auto;
`;
function Login() {
  //   const [loading, setLoading] = useState(false);
  //   const [open, setOpen] = useState(false);
  //   const showModal = () => {
  //     setOpen(true);
  //   };
  //   const handleOk = () => {
  //     setLoading(true);
  //     setTimeout(() => {
  //       setLoading(false);
  //       setOpen(false);
  //     }, 3000);
  //   };
  //   const handleCancel = () => {
  //     setOpen(false);
  //   };

  return (
    <Account className="account">
      <div className="">
        <Link to="/login"></Link>
        <SignIn />
      </div>
    </Account>
  );
}

export default Login;
