import {
  createBrowserRouter,
  
} from "react-router-dom";


import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home/Home";
import Resume from "../page/Resume/Resume";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>Page Not Found</div>,
    children: [
      {path:'/',
        element: <Home/>,
      },
      {path:'/resume',
        element: <Resume/>,
      }
    ]},
]);
export default router;