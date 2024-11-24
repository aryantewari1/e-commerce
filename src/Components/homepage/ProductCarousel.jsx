// eslint-disable-next-line react/prop-types
const ProductCarousel = ({ products, index }) => {
  return (
    <div className="flex flex-col items-center mt-20 desktop:mt-0 desktop:mr-16">
      <div>
        <img
          src={products[index]?.image}
          className="w-72 h-80 mt-24 shadow-xl shadow-brown-600 rounded-xl object-cover desktop:w-[500px] desktop:h-[490px]"
        />
      </div>
      <div className="mt-6 p-2 bg-brown-800 rounded-sm">
        <p className="font-bas w-96 text-white mb-1 mr-1 text-center">
          <span className="line-clamp-1">{products[index]?.title}</span>
        </p>
        <div className=" pr-4 rounded-sm ">
          <p className="text-white  font-bas mb-1">
            <span className="bg-blue-gray-100 text-black p-1 mr-2">
              Rating:
            </span>
            {"⭐" + products[index]?.rating?.rate}
          </p>
          <p className=" text-white font-bas ">
            <span className="bg-blue-gray-100 text-black p-1 mr-2">Price:</span>
            <span>{"$" + products[index]?.price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
