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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/allchefs"),
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
          fetch(`http://localhost:5000/chef/${params.id}`),
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
]);

export default router;
