import { lazy } from "react";
const RoutesArray = [
  {
    path: "/",
    component: lazy(() => import("@page/user/Home/Home")),
    exact: true,
    type: "unauth",
  },
  {
    path: "login",
    component: lazy(() => import("@page/auth/Login/Login")),
    exact: true,
    type: "unauth",
  },
  {
    path: "register",
    component: lazy(() => import("@page/auth/Register/Register")),
    exact: true,
    type: "unauth",
  },
  {
    path: "profile",
    component: lazy(() => import("@page/auth/Profile/Profile")),
    exact: true,
    type: "auth",
  },
  {
    path: "cart",
    component: lazy(() => import("@page/user/Cart/Cart")),
    exact: true,
    type: "auth",
  },
  {
    path: "collection",
    component: lazy(() => import("@page/user/Collection/Collection")),
    exact: true,
    type: "unauth",
  },
  {
    path: "admin-product",
    component: lazy(() => import("@page/admin/AdminProduct/Product")),
    exact: true,
    type: "admin",
  },
  {
    path: "admin-product/create",
    component: lazy(() => import("@page/admin/AdminProduct/ProductForm")),
    exact: true,
    type: "admin",
  },
];
export default RoutesArray;
