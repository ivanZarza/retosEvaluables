import { createBrowserRouter } from "react-router-dom";
import BooksPage from "../pages/BooksPage";
import HomePage from "../pages/HomePage";
import About from "../pages/LoginPage";


const routes = createBrowserRouter([
{
  path:'/',
  element:<HomePage/>
},
{
  path: '/about',
  element: <About />,
},
{
  path:'/bookspage',
  element:<BooksPage/>
},
]);

export default routes;