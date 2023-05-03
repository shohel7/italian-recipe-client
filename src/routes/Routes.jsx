import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home/Home";
import RecipeLayout from "../layouts/RecipeLayout";
import ChefRecipe from "../pages/Home/ChefRecipe/ChefRecipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
    children: [
      {
        path: ":id",
        element: <ChefRecipe />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef/${params.id}`),
      },
    ],
  },
]);

export default router;
