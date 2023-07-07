import { Outlet } from "react-router-dom"; //outlet: placeholder for the child route components to render into***
import Footer from "../Components/Footer";
import Header from '../Components/Header';

export default function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}