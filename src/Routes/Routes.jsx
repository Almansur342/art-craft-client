import {createBrowserRouter} from "react-router-dom";
import Root from "../Layouts/Root";
import ErrorPage from "../Pages/ErrorPage/ErroPage";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);

export default router;