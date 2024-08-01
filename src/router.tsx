import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import DashboardLayout from "./layouts/DashboardLayout";
import BooksPage from "./pages/BooksPage";
import AuthLayout from "./layouts/AuthLayout";
import CreateBooks from "./pages/CreateBooks";
import ClientHomePage from "./frontend/Main";
import About from "./frontend/about/About";
import Services from "./frontend/services/Services";
import Books from "./frontend/books/Books";
import Contact from "./frontend/contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientHomePage />,
  },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/books", element: <Books /> },
  { path: "/contact", element: <Contact /> },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "books",
        element: <BooksPage />,
      },
      {
        path: "books/create",
        element: <CreateBooks />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);
export default router;
