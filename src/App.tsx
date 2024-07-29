// packages all
import { useSelector } from "react-redux";
import { useLazyLoadUserQuery, useLazyRefreshTokenQuery } from "./redux/features/api/apiSlice"
import { RootState } from "./redux/store"
import { Navigate, Outlet, Route, Routes } from "react-router-dom"
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

import { lazy, Suspense, useEffect } from "react"
// @ts-ignore
import Cookies from "js-cookie"
function App() {
  const { userDetails, isAuthenticated } = useSelector((state: RootState) => state.auth);
  const [tokenTigger, { isFetching }] = useLazyRefreshTokenQuery();
  const [trigger, { isLoading }] = useLazyLoadUserQuery();

  useEffect(() => {
    if (Cookies.get('refreshToken')) {
      // @ts-ignore
      tokenTigger();
      // @ts-ignore
      trigger();
      localStorage.removeItem("token");
      window.scrollTo(0, 0);
    }
    else {
      if (JSON.parse(localStorage.getItem("token")!)) {
        Cookies.set("refreshToken", JSON.parse(localStorage.getItem("token")!));
        // @ts-ignore
        tokenTigger().then(async () => {
          // @ts-ignore
          await trigger();
        }).then(()=>{
          localStorage.removeItem("token");
        })
      }
    }
  }, [])

window.onbeforeunload = ()=>{
  localStorage.setItem("token", JSON.stringify(Cookies?.get('refreshToken') || ""));
}
  return (
    <>
      <div className="flex w-full 2xl:items-center flex-col">
        <TopNavbar isAuthenticated={isAuthenticated} currentUser={userDetails} loading={isFetching || isLoading} />
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
        {
          <Route element={<ProtectedRoute  isAuthenticated={isAuthenticated}/>}>
            <Route path="/dashboard/account" element={<div className="flex px-10 w-full  py-10 ">
              <DashboardSideBar />
              <UserAccount />
            </div>} />
            <Route path="/dashboard/order" element={<div className="flex px-10 py-10 ">
              <DashboardSideBar />
              <UserOrdersList />
            </div>} />
            <Route path="/dashboard/wishlist" element={<div className="flex px-10 py-10 ">
              <DashboardSideBar />
              <UserFavList />

            </div>} />
            <Route path="/dashboard/address" element={<div className="flex px-10 py-10 ">
              <DashboardSideBar />
              <UserAddress />

            </div>} />
            <Route path="/dashboard/account/edit" element={<div className="flex px-10 py-10">
              <DashboardSideBar />
              <UserAccountEdit />

            </div>} />
            <Route path="/dashboard/review" element={<div className="flex px-10 py-10">
              <DashboardSideBar />
              <UserProductReviews />

            </div>} />
            <Route path="/dashboard/address/edit/:addressId" element={<div className="flex px-10 gap-5 py-10">
              <DashboardSideBar />
              <UserAddressEditById />

            </div>} />
          </Route>
        }
        <Route path="*" element={<NotFoundPage />} />
        {/* auth routes */}
        {
          <Route element={<AuthRoute isAuthenticated={isAuthenticated} />}> 
            <Route path="/customer/account/login" element={<AuthLogin />} />
            <Route path="/customer/account/create" element={<AuthRegister />} />
            <Route path="/customer/account/forgetPassword" element={<ForgetPassWord />} />
            <Route path="/customer/account/setnewPassword/" element={<ForgetPasswordReset />} />
          </Route>
        }
      </Routes>
      <Footer />
    </>
  )
}

export default App


const Loadable = (Component: any) => (props: any) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

const AuthRoute = ({isAuthenticated}:{isAuthenticated:boolean}) => {
  return !Cookies.get('refreshToken') && !isAuthenticated  ? <Outlet /> : <Navigate to="/dashboard/account" />
}
const ProtectedRoute = ({isAuthenticated}:{isAuthenticated:boolean}) => {
  return Cookies.get('refreshToken') && isAuthenticated  ? <Outlet /> : <Navigate to="/customer/account/login" />
}
const Home = Loadable(lazy(() => import("./pages/Home")));
const ForgetPassWord = Loadable(lazy(() => import("./pages/ForgetPassWord")));
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
const ForgetPasswordReset = Loadable(lazy(() => import("./pages/ForgetPasswordReset")))

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

