import { Route, Routes } from "react-router-dom";
import "./App.css";
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
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Store" element={<Store />} />
            <Route path="/Community" element={<Blog />} />
            <Route path="/support" element={<Support />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/CheckOut" element={<CheckOut />} />
            <Route path=":productId" element={<Detail />} />
            {/* <Route path="/products" element={<AdminGame />} /> */}
          </Route>
        </Routes>
      </div>
      {/* <AdminGame /> */}
    </>
  );
}

export default App;
