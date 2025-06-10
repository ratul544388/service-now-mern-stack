import Layout from "@/layouts";
import AuthLayout from "@/layouts/auth-layout";
import ProtectedLayout from "@/layouts/protected-layout";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import AddService from "@/pages/protected/dashboard/add-service";
import BookedServices from "@/pages/protected/dashboard/booked-services";
import EditService from "@/pages/protected/dashboard/edit-service";
import ManageServices from "@/pages/protected/dashboard/manage-services";
import MyBookings from "@/pages/protected/my-bookings";
import Profile from "@/pages/protected/profile";
import ServiceDetails from "@/pages/protected/service-details";
import ServicesTodo from "@/pages/protected/services-to-do";
import Home from "@/pages/public/home";
import NotFound from "@/pages/public/not-found";
import Services from "@/pages/public/services";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        Component: ProtectedLayout,
        children: [
          {
            path: "/services/:slug",
            Component: ServiceDetails,
          },
          {
            path: "/my-bookings",
            Component: MyBookings,
          },
          {
            path: "/dashboard/add-service",
            Component: AddService,
          },
          {
            path: "/dashboard/services",
            Component: ManageServices,
          },
          {
            path: "/dashboard/services/booked",
            Component: BookedServices,
          },
          {
            path: "/dashboard/services/todo",
            Component: ServicesTodo,
          },
          {
            path: "/dashboard/services/:slug/edit",
            Component: EditService,
          },
          {
            path: "/profile",
            Component: Profile,
          },
        ],
      },
      {
        Component: AuthLayout,
        children: [
          {
            path: "/auth/login",
            Component: Login,
          },
          {
            path: "/auth/register",
            Component: Register,
          },
        ],
      },
    ],
  },
  {
    path: "/*",
    Component: NotFound,
  },
]);
