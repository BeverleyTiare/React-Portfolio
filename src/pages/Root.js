import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Header from '../Components/Header';

export default function Root() {
  return (
    <>
      <Header />
      <Navbar />
          <Outlet />
      <Footer />
    </>
  );
}