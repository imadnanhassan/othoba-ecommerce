import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/ui/home/hompage";
import CategoryPage from "../pages/ui/category/category";
import ProductDetails from "../pages/ui/product-details/productDetails";
import CartPage from "../pages/ui/cart/Cart";
import CheckoutPage from "../pages/ui/checkout/checkoutpage";
import AdminLayout from "../layouts/AdminLayout";
import { DarkModeProvider } from "../Context/DarkModeContext";
import { adminURL } from "../utils/adminURL";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import ProductsList from "../pages/admin/products/ProductsList";
import ProductCreate from "../pages/admin/products/ProductCreate";
import ProductCategoryCreate from "../pages/admin/products/ProductCategoryCreate";
import ProductCategoryList from "../pages/admin/products/ProductCategoryList";
import ProductBrandList from "../pages/admin/products/ProductBrandList";
import ProductCreateBrand from "../pages/admin/products/ProductCreateBrand";
import OrderList from "../pages/admin/order-list/OrderList";

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/bra", element: <CategoryPage /> },
      { path: "/:productId", element: <ProductDetails /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/checkout", element: <CheckoutPage /> },
    ],
  },

  {
    path: "/admin",
    element: (
      <DarkModeProvider>
        <AdminLayout />
      </DarkModeProvider>
    ),
    children: [
      { path: `${adminURL}`, element: <Dashboard /> },
      { path: `${adminURL}/product/list`, element: <ProductsList /> },
      { path: `${adminURL}/product/create`, element: <ProductCreate /> },
      {
        path: `${adminURL}/product/category-create`,
        element: <ProductCategoryCreate />,
      },
      {
        path: `${adminURL}/product/categorys`,
        element: <ProductCategoryList />,
      },
      {
        path: `${adminURL}/product/brand-list`,
        element: <ProductBrandList />,
      },
      {
        path: `${adminURL}/product/category-brand`,
        element: <ProductCreateBrand />,
      },
      {
        path: `${adminURL}/order-list`,
        element: <OrderList />,
      },
    ],
  },
]);

export default route;
