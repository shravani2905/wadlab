import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RootLayout from "./Components/RootLayout/RootLayout";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contact from "./Components/Contact/Contact";
import Cart from "./Components/Cart/Cart";
import Catalogue from "./Components/Catalogue/Catalogue";
import Signup from "./Components/Signup/Signup"
import Signin from "./Components/Signin/Signin"
import "./App.css";
function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <AboutUs />,
        },
        {
          path: "aboutus",
          element: <AboutUs />,
        },
        {
          path: "signup",
          element: <Signup/>,
        },
        {
          path: "signin",
          element: <Signin/>,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "catalogue",
          element: <Catalogue />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;