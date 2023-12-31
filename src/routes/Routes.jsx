import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home/Home";
import RecipeLayout from "../layouts/RecipeLayout";
import ChefRecipe from "../pages/Home/ChefRecipe/ChefRecipe";
import NotFound from "../pages/Home/NotFound/NotFound";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Home/Login/Login/Login";
import Register from "../pages/Home/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Home/Home/Blog/Blog";
import BlogLayout from "../layouts/BlogLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://y-six-cyan.vercel.app/allchefs"),
      },
    ],
  },
  {
    path: "chefRecipes",
    element: <RecipeLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <ChefRecipe />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://y-six-cyan.vercel.app/chef/${params.id}`),
      },
    ],
  },
  {
    path: "/",
    element: <LoginLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <BlogLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
