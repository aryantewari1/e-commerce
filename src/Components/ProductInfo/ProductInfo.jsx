import useProductData from "../utils/hooks/useProductData";

const ProductInfo = () => {
  const product = useProductData();

  return (
    <div className="pt-14 min-h-screen ">
      <div className="flex flex-col items-center pt-4 desktop:flex-row desktop:justify-center ">
        <div className="flex-[1] ">
          <img
            src={product?.image}
            className="w-64 mt-16 desktop:w-96 desktop:mx-auto desktop:mt-28 "
          />
        </div>
        <div className="flex-[1] mt-4 desktop:flex desktop:flex-col desktop:items-center">
          <p className="text-xl font-mont font-bold line-clamp-2 text-brown-800 text-center desktop:text-4xl ">
            {product?.title}
          </p>
          <p className=" text-center font-mont font-semibold mt-2 w-96 line-clamp-4  desktop:w-10/12">
            {product?.description}
          </p>
          <p className="text-center desktop:mt-8">
            <span className="m-4 font-mont font-semibold desktop:text-xl">
              {"Price-$" + product?.price}
            </span>{" "}
            <span className="font-mont font-semibold desktop:text-xl">
              {"Rating-⭐" + product?.rating?.rate}
            </span>
          </p>
          <button className="mt-2 px-14 font-mont py-2 text-xl hover:bg-brown-700 bg-brown-800 text-white ml-24 desktop:ml-0 desktop:px-32 rounded-lg">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
