import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import "swiper/css/bundle";
import Store from "./pages/Store/Store";
import Support from "./pages/Support/Support";
import Blog from "./pages/Blog/Blog";
import CheckOut from "./pages/Checkout/CheckOut";
import SignUp from "./pages/Login/SignUp/SignUp";
import SignIn from "./pages/Login/SignIn/SignIn";
import Wishlist from "./pages/Wishlist/Wishlist";
import PrivateRoutes from "./pages/Private/PrivateRoutes/PrivateRoutes";
import OrderHistory from "./pages/Private/OrderHistory/OrderHistory";
import FAQ from "./pages/FAQ/FAQ";
import EditSuccess from "./pages/Private/Profile/EditSuccess/EditSuccess";
import EditProfile from "./pages/Private/Profile/Profile";
import Admin from "./components/Admin/Admin";
import UserState from "./components/Admin/User/User";
import ProductList from "./components/Admin/Product/ProductList";
import EditUser from "./components/Admin/User/EditUser/EditUser";

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
            <Route path="/signup" element={<SignUp />} />
            <Route path="/checkOut" element={<CheckOut />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/detail/:productId" element={<Detail />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/history" element={<OrderHistory />} />
              <Route path="/profile" element={<EditSuccess />} />
              <Route path="/editprofile" element={<EditProfile />} />
              <Route path="/admin" element={<Admin />}>
                <Route path="/admin/usersList" element={<UserState />}>
                  <Route path=":userId" element={<EditUser />} />
                </Route>
                <Route path="/admin/productList" element={<ProductList />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
