/* eslint-disable react/prop-types */
const SearchItemCard = ({ data }) => {
  return (
    <div className="flex p-2 pb-3 bg-[#02f9e048] mb-1 rounded-lg">
      <div className="pt-2 ml-1">
        <img src={data?.image} className="w-24 h-24 object-cover rounded-md" />
      </div>
      <div className="flex flex-col w-full justify-center items-center tablet:w-80">
        <div className="font-mont font-bold text-md text-black">
          {data?.category.toUpperCase()}
        </div>
        <div className="w-52 pl-4 text-ellipsis line-clamp-2 text-xs font-mont text-black ">
          {" "}
          {data?.description}
        </div>
      </div>
    </div>
  );
};

export default SearchItemCard;
