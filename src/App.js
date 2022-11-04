import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Contacts from "./pages/contacts/Contacts";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import Registration from "./pages/registration/Registration";


function App() {
  const Layout = () => {
    return (
      <div className="wrapper">
        <NavBar />
        <Outlet />
      </div>
    );
  };

  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/login" />;
  //   }

  //   return children;
  // };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        // <ProtectedRoute></ProtectedRoute>
        <Layout />
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: (<> <NavBar /> <Login /></>) ,
    },
    {
      path: "/main",
      element: (<> <NavBar /> <Main/></>),
    },
    {
      path: "/contacts",
      element: (<> <NavBar /> <Contacts/></>),
    },
    {
      path: "/registration",
      element: (<> <NavBar /> <Registration /></>) ,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
