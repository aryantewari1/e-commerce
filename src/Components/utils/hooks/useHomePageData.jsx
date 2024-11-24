import { useEffect, useState } from "react";
import { addProducts } from "../../../store/Slices/appData";
import { useDispatch, useSelector } from "react-redux";
import { setActiveIndex } from "../../../store/Slices/CarouselSlice";

const useHomePageData = () => {
  const dispatch = useDispatch();
  const activeIndex = useSelector((store) => store?.carousel?.activeIndex);
  const products = useSelector((store) => store?.products?.products);
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (products.length === 0) return;

    const timeout = setTimeout(() => {
      const i = (activeIndex + 1) % products.length;
      dispatch(setActiveIndex(i));
    }, 2000);

    return () => clearTimeout(timeout);
  }, [products, activeIndex]);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    dispatch(addProducts(data));
  };

  return { products, activeIndex };
};

export default useHomePageData;
