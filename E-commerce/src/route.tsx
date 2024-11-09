import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage"
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import CategoriesPage from "./pages/CategoriesPage";
import ProductsPage from "./pages/ProductsByCategoryPage";
import ShopPage from "./pages/ShopPage";
import ShopDetailPage from "./pages/ShopDetailPage";
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
  ]);
  
  export default router;
  