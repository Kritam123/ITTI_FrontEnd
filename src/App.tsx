// packages all
import { useSelector } from "react-redux";
import { useLoadUserQuery } from "./redux/features/api/apiSlice"
import { RootState } from "./redux/store"

import { Route, Routes, useNavigate } from "react-router-dom"
// components all
import TopNavbar from "@/components/CommonComponents/TopNavbar"
import Navbar from "@/components/CommonComponents/Navbar"
import DashboardSideBar from "./components/CommonComponents/DashboardSideBar"
import NotFoundPage from "./components/CommonComponents/NotFoundPage"
import BottomNavbar from "@/components/CommonComponents/BottomNavbar"
import MobileTabBar from "./components/CommonComponents/MobileComponents/MobileTabBar"
import { LoadingScreen } from "./components/CommonComponents/LoadingScreen"

import Footer from "./components/CommonComponents/Footer"
// pages all

import React, { lazy, Suspense, useEffect } from "react"

function App() {
  const navigate = useNavigate();
  const { userDetails, isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { data, isLoading, isSuccess } = useLoadUserQuery("getUser", { skip: false });
  useEffect(()=>{
    if(userDetails && isAuthenticated){
      navigate("/dashboard/account",{replace:true});
    }

  },[userDetails,isAuthenticated])
  return (
    <>
      <div className="flex w-full 2xl:items-center flex-col">
        <TopNavbar isAuthenticated={isSuccess} currentUser={userDetails} loading={isLoading} />
        <Navbar />
        <BottomNavbar />
      </div>
      <MobileTabBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:name" element={<ProductDetails />} />
        <Route path="/search/result" element={<ProductsSearch />} />
        <Route path="/search/result" element={<ProductsSearch />} />
        <Route path="/compare" element={<CompareProducts />} />
        <Route path="/checkout/cart" element={<CartProducts />} />


        {/* dashboard rotues */}

        <>
          <Route path="/dashboard/account" element={<div className="flex px-10 w-full  py-10 ">
            <ProtectRoute data={data} isSuccess={isSuccess} isLoading={isLoading}>
              <DashboardSideBar />
              <UserAccount />
            </ProtectRoute>
          </div>} />
          <Route path="/dashboard/order" element={<div className="flex px-10 py-10 ">
            <ProtectRoute data={data} isSuccess={isSuccess} isLoading={isLoading}>
              <DashboardSideBar />
              <UserOrdersList />
            </ProtectRoute>
          </div>} />
          <Route path="/dashboard/wishlist" element={<div className="flex px-10 py-10 ">
            <ProtectRoute data={data} isSuccess={isSuccess} isLoading={isLoading}>
              <DashboardSideBar />
              <UserFavList />
            </ProtectRoute>

          </div>} />
          <Route path="/dashboard/address" element={<div className="flex px-10 py-10 ">
            <ProtectRoute data={data} isSuccess={isSuccess} isLoading={isLoading}>
              <DashboardSideBar />
              <UserAddress />
            </ProtectRoute>

          </div>} />
          <Route path="/dashboard/account/edit" element={<div className="flex px-10 py-10">
            <ProtectRoute data={data} isSuccess={isSuccess} isLoading={isLoading}>
              <DashboardSideBar />
              <UserAccountEdit />
            </ProtectRoute>

          </div>} />
          <Route path="/dashboard/review" element={<div className="flex px-10 py-10">
            <ProtectRoute data={data} isSuccess={isSuccess} isLoading={isLoading}>
              <DashboardSideBar />
              <UserProductReviews />
            </ProtectRoute>

          </div>} />
          <Route path="/dashboard/address/edit/:addressId" element={<div className="flex px-10 gap-5 py-10">
            <ProtectRoute data={data} isSuccess={isSuccess} isLoading={isLoading}>
              <DashboardSideBar />
              <UserAddressEditById />
            </ProtectRoute>

          </div>} />
        </>


        <Route path="*" element={<NotFoundPage />} />
        {/* auth routes */}
        {!isAuthenticated &&
          <>
            <Route path="/customer/account/login" element={<AuthLogin />} />
            <Route path="/customer/account/create" element={<AuthRegister />} />
            <Route path = "/customer/account/forgetPassword" element= {<ForgetPassWord/>}/>
            <Route path = "/customer/account/setnewPassword/" element= {<ForgetPasswordReset/>}/>
          </>
        }
      </Routes>
      <Footer />
    </>
  )
}

export default App


const ProtectRoute = ({ children, data, isSuccess, isLoading }: { children: React.ReactNode, data: any, isSuccess: boolean, isLoading: boolean }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!data && !isSuccess && !isLoading) {
      return navigate("/", { replace: true });
    }
    
  }, [data, isSuccess, isLoading])
  if (!data && !isSuccess && isLoading) {
    return (
      <>
        <div className="flex justify-center items-center w-full min-h-screen">
          <div className="loader"></div>
        </div>
      </>
    )
  }
  return (
    <>
      {children}
    </>
  )
}

const Loadable = (Component: any) => (props: any) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};


const Home = Loadable(lazy(() => import("./pages/Home")));
const ForgetPassWord = Loadable(lazy(()=>import("./pages/ForgetPassWord")));
const AuthLogin = Loadable(lazy(() => import("./pages/AuthLogin")));
const AuthRegister = Loadable(lazy(() => import("./pages/AuthRegister")));
const UserAccount = Loadable(lazy(() => import("./pages/UserAccount")));
const UserAddress = Loadable(lazy(() => import("./pages/UserAddress")));
const UserFavList = Loadable(lazy(() => import("./pages/UserFavList")));
const UserAccountEdit = Loadable(lazy(() => import("./pages/UserAccountEdit")));
const UserProductReviews = Loadable(lazy(() => import("./pages/UserProductReviews")));
const UserOrdersList = Loadable(lazy(() => import("./pages/UserOrdersList")));
const CartProducts = Loadable(lazy(() => import("./pages/CartProducts")));
const CompareProducts = Loadable(lazy(() => import("./pages/CompareProducts")));
const ProductDetails = Loadable(lazy(() => import("./pages/ProductDetails")));
const ProductsSearch = Loadable(lazy(() => import("./pages/ProductsSearch")));
const UserAddressEditById = Loadable(lazy(() => import("./pages/UserAddressEditById")))
const ForgetPasswordReset = Loadable(lazy(()=>import("./pages/ForgetPasswordReset"))) 

// import ProductDetails from "./pages/ProductDetails"
// import ProductsSearch from "./pages/ProductsSearch"
// import CompareProducts from "./pages/CompareProducts"
// import CartProducts from "./pages/CartProducts"
// import UserAccount from "./pages/UserAccount"
// import UserAddress from "./pages/UserAddress"
// import UserFavList from "./pages/UserFavList"
// import UserAccountEdit from "./pages/UserAccountEdit"
// import UserProductReviews from "./pages/UserProductReviews"
// import UserOrdersList from "./pages/UserOrdersList";
// import AuthLogin from "./pages/AuthLogin"
// import AuthRegister from "./pages/AuthRegister"
// import Home from "./pages/Home"

