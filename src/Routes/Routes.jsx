import {createBrowserRouter} from "react-router-dom";
import Root from "../Layouts/Root";
import ErrorPage from "../Pages/ErrorPage/ErroPage";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from './../Pages/Login/Login';
import Details from "../Pages/Details/Details";
import AddCraftItems from "../Pages/AddCraftItems/AddCraftItems";
import MyCraftList from "../Pages/MyCraftList/MyCraftList";
import Update from "../Pages/Update/Update";
import AllCraftItems from "../Pages/AllCraftItems/AllCraftItems";
import RelatedCards from "../Pages/RelatedCards/RelatedCards";
import PrivateRoute from "../Firebase/PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element:<Home></Home>,
        loader: ()=> fetch('http://localhost:5000/sixCraftItem')
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      // {
      //   path: '/details/:id',
      //   element:<Details></Details>,
      //   loader:()=> fetch('http://localhost:5000/craftItem')
      // },
      
      {
        path: '/item/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>,
      },
      {
        path: '/relate/:subcategory_name',
        element:<RelatedCards></RelatedCards>,
      },
      {
        path: '/update/:id',
        element:<Update></Update>,
      },
      {
        path:'/addCraftItem',
        element:<PrivateRoute><AddCraftItems></AddCraftItems></PrivateRoute>
      },
      {
        path:'/myArtCraft',
        element:<PrivateRoute><MyCraftList></MyCraftList></PrivateRoute>
      },
      {
        path:'/allArtCraft',
        element:<AllCraftItems></AllCraftItems>,
        loader: ()=> fetch('http://localhost:5000/craftItem')
      },
      
    ]
  },
]);

export default router;