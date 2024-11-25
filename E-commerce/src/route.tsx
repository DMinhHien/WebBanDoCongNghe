import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage"
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import CategoriesPage from "./pages/CategoriesPage";
import ProductsPage from "./pages/ProductsByCategoryPage";
import ShopPage from "./pages/ShopPage";
import ShopDetailPage from "./pages/ShopDetailPage";
import LoginPage from "./components/Auth/LoginPage";
import ProfilePage from "./components/Auth/ProfilePage";
import SignUpPage from "./components/Auth/SignUpPage";
import QuanLySP from "./pages/QuanLySanPham";
import ProductCreate from "./pages/ProductCreate";
import ChinhSuaSP from "./pages/ChinhSuaSanPham";
import QuanLyDonHang from "./pages/QuanLyDonHang";
import QuanLyThongTin from "./pages/QuanLyThongTin";
import ChinhSuaShop from "./pages/ChinhSuaShop"
const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [{ index: true, element: <HomePage /> }],
    },
    {
      path: "/products/:id",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [{ index: true, element: <ProductDetail /> }],
    },
    {
      path: "/categories",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [{ index: true, element: <CategoriesPage /> }],
    },
    {
      path: "/productscategory/:categoryId",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [{ index: true, element: <ProductsPage /> }],
    },
    {
      path: "/shops",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [{ index: true, element: <ShopPage /> }],
    },
    {
      path: "/shop/:shopId",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [{ index: true, element: <ShopDetailPage /> }],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: < SignUpPage/>,
    },
    {
      path: "/profile",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [{ index: true, element: <ProfilePage /> }],
    },
    {
      path: "/quanlyshop",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [{ index: true, element: <QuanLySP /> }],
    },
    {
      path: "/quanlyshop/new",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [{ index: true, element: <ProductCreate /> }],
    },
    {
      path: "/quanlyshop/edit/:id",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [{ index: true, element: <ChinhSuaSP /> }],
    },
    {
      path: "/quanlyshop/QuanLyDonHang",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [{ index: true, element: <QuanLyDonHang /> }],
    },
    {
      path: "/quanlyshop/QuanLyThongTin",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [{ index: true, element: <QuanLyThongTin /> }],
    },
    {
      path: "/quanlyshop/QuanLyThongTin/edit",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [{ index: true, element: <ChinhSuaShop /> }],
    },
  ]);
  
  export default router;
  