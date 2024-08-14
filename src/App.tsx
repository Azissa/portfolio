// src/App.tsx
import React, { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Loading from './frontend/components/elements/loading';

// Lazy load halaman
const Home = lazy(() => import('./frontend/pages/home'));
const About = lazy(() => import('./frontend/pages/about'));
const Project = lazy(() => import('./frontend/pages/project'));
const Contact = lazy(() => import('./frontend/pages/contact'));

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
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </React.StrictMode>
  );
};

export default App;
