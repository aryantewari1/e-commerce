import { useEffect } from "react";
import { addProducts } from "../../../store/Slices/appData";
import { useDispatch, useSelector } from "react-redux";

const useHomePageData = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store?.products?.products);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    dispatch(addProducts(data));
  };

  return products;
};

export default useHomePageData;
