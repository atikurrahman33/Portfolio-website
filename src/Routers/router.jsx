import {
  createBrowserRouter,
  
} from "react-router-dom";


import MainLayout from "../Layout/mainLayout";
import Home from "../page/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>Page Not Found</div>,
    children: [
      {path:'/',
        element: <Home/>,
      }
    ]},
]);
export default router;