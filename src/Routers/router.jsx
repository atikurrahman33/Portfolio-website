import {
  createBrowserRouter,
  
} from "react-router-dom";


import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home/Home";
import Resume from "../page/Resume/Resume";
import Details from "../page/Projects/Details";


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
      },
      
      {path:'/details/:id',
        element:<Details/>
      }
    ]},
]);
export default router;