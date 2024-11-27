import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addProduct, removeProduct } from "../../../store/Slices/appData";
import { productAPI } from "../../../utils/constants";

const useProductData = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const product = useSelector((store) => store?.products?.product);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    handleProductData();
    return () => {
      dispatch(removeProduct());
    };
  }, []);
  const handleProductData = async () => {
    const data = await fetch(productAPI + id);
    const jsonData = await data.json();
    console.log(jsonData);
    dispatch(addProduct(jsonData));
  };
  return product;
};

export default useProductData;
