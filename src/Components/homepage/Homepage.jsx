import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../store/Slices/appData";

const Homepage = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store?.products?.products);
  console.log(products);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    dispatch(addProducts(data));
  };
  return <div>Homepage</div>;
};

export default Homepage;
