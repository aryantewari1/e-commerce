import { Outlet } from "react-router-dom";
import Header from "./Components/navbar/Header.jsx";
import Footer from "./Components/footer/Footer.jsx";

const App = () => {
  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
