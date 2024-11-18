import { Outlet } from "react-router-dom";
import Header from "./Components/navbar/Header.jsx";
import Footer from "./Components/footer/Footer.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
