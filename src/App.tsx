import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./frontend/pages/home";
import React from "react";
import About from "./frontend/pages/about";
import Project from "./frontend/pages/project";
import Contact from "./frontend/pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Project",
    element: <Project />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
]);

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
