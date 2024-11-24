// eslint-disable-next-line react/prop-types
const ProductCarousel = ({ products, index }) => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <img
          src={products[index]?.image}
          className="w-64 mt-24 shadow-xl shadow-brown-600 rounded-xl "
        />
      </div>
      <div className="mt-10 p-2 bg-brown-800 rounded-sm">
        <p className="font-bas text-center text-white">
          {products[index]?.title}
        </p>
      </div>

      <div className=" bg-green-800 pl-2 pr-4 rounded-sm flex">
        <p className="text-white  font-bas">
          {"⭐" + products[index]?.rating?.rate + " " + "||" + " " + " "}
        </p>
        <p className="ml-2 text-white  font-bas ">
          {"$" + products[index]?.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCarousel;
