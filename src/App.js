import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import Layout from "./components/Layout/Layout";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import "swiper/css/bundle";
import Store from "./pages/Store/Store";
import Support from "./pages/Support/Support";
import Blog from "./pages/Blog/Blog";
import Login from "./pages/Login/Login";
import CheckOut from "./pages/Checkout/CheckOut";
import SignUp from "./pages/Login/SignUp/SignUp";
import AdminGame from "./components/Admin/Admin";

function App() {
  return (
    <>
      {/* <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Detail" element={<Detail />} />
            <Route path="/Store" element={<Store />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/support" element={<Support />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/CheckOut" element={<CheckOut />} />
          </Route>
        </Routes>
      </div> */}
      <AdminGame />
    </>
  );
}

export default App;
