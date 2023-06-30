
import React from 'react';
import './App.css';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from "./pages/Resume";
import Root from './pages/Root';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      // errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/resume",
          element: <Resume />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}


export default App;
