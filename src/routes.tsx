import EmployeePage from "./pages/employee/EmployeePage";
import ForgotPasswordPage from "./pages/forgotPassword/ForgotPasswordPage";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import PageNotFoundPage from "./pages/pageNotFound/PageNotFoundPage";
import RegisterPage from "./pages/register/RegisterPage";
import RequestPage from "./pages/request/RequestPage";

interface RouteApp {
  path: string;
  component: React.ReactElement;
  text: undefined | string;
  isNavbarNav: boolean;
}

const noShellRouteList: RouteApp[] = [
  {
    path: "/login",
    component: <LoginPage />,
    text: undefined,
    isNavbarNav: false,
  },
  {
    path: "/register",
    component: <RegisterPage />,
    text: undefined,
    isNavbarNav: false,
  },
  {
    path: "/forgot-password",
    component: <ForgotPasswordPage />,
    text: undefined,
    isNavbarNav: false,
  },
];

const shellRouteList: RouteApp[] = [
  {
    path: "*",
    component: <PageNotFoundPage />,
    text: undefined,
    isNavbarNav: false,
  },
  {
    path: "/",
    component: <HomePage />,
    text: "Home",
    isNavbarNav: true,
  },
  {
    path: "/request",
    component: <RequestPage />,
    text: "Request",
    isNavbarNav: true,
  },
  {
    path: "/employee",
    component: <EmployeePage />,
    text: "Employee",
    isNavbarNav: true,
  },
];

export { noShellRouteList, shellRouteList, type RouteApp };
