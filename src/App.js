import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Root from './pages/Root';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/resume" element={<ResumePage />} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;














/*import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar"; //scroll
import Section from "./Components/Section";//scroll
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

export default App;*/
  

