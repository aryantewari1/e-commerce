import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addProduct, removeProduct } from "../../store/Slices/appData";

const ProductInfo = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const product = useSelector((store) => store?.products?.product);
  const dispatch = useDispatch();

  useEffect(() => {
    handleProductData();

    return () => {
      dispatch(removeProduct());
    };
  }, []);
  const handleProductData = async () => {
    const data = await fetch("https://fakestoreapi.com/products/" + id);
    const jsonData = await data.json();
    console.log(jsonData);
    dispatch(addProduct(jsonData));
  };

  return <div className="pt-14"></div>;
};

export default ProductInfo;
