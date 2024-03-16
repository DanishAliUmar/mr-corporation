import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Partners from "./pages/Partners"
import Results from "./pages/Results"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/partners",
          element: <Partners />,
        },
        {
          path: "/results",
          element: <Results />,
        },
        {
          path: "/contacts",
          element: <Contacts />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
       
      ],
    },
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
