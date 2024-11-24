const Categories = ({ categories }) => {
  return (
    <div className="">
      <div>
        <img
          src={categories.image}
          className="w-20 rounded-full hover:shadow-brown-800 shadow-lg transition-shadow desktop:w-44 desktop:h-64 desktop:object-cover desktop:rounded-md"
        />
      </div>
    </div>
  );
};

export default Categories;
