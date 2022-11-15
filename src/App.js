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
import SignIn from "./pages/Login/SignIn/SignIn";
import Wishlist from "./pages/Wishlist/Wishlist";
import PrivateRoutes from "./pages/Private/PrivateRoutes/PrivateRoutes";
import OrderHistory from "./pages/Private/OrderHistory/OrderHistory";
import SecurityAccount from "./pages/Private/SecurityAccount/SecurityAccount";
import Profile from "./pages/Private/Profile/Profile";
import AdminGame from "./components/Admin/Admin";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/support" element={<Support />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/checkOut" element={<CheckOut />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/detail/:productId" element={<Detail />} />
            <Route path="/wishlist" element={<Wishlist />} />

            <Route element={<PrivateRoutes />}>
              <Route path="/history" element={<OrderHistory />} />
              <Route path="/security" element={<SecurityAccount />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </div>
      {/* <AdminGame /> */}
    </>
  );
}

export default App;
