import { useNavigate } from "react-router";

const HomeCategoryCard = ({ item }: any) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/products/${item.categoryId}`)}
      className=" group flex flex-col items-center gap-2 rounded-full bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer "
    >
      <div className="w-full aspect-square rounded-full bg-gray-100 overflow-hidden flex items-center justify-center ">
        <img
          src={item.image}
          alt=""
          className=" w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 "
        />
      </div>

      <h1 className="text-sm font-semibold text-center text-gray-800 group-hover:text-indigo-600">
        {item.name}
      </h1>
    </div>
  );
};

export default HomeCategoryCard;
