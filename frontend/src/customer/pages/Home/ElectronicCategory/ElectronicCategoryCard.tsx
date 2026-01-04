import { useNavigate } from "react-router-dom";

const ElectronicCategoryCard = ({ item }: any) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/products/${item.categoryId}`)}
      className="group flex flex-col items-center gap-3 rounded-2xl bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 "
    >
      <div className="w-full aspect-square rounded-xl bg-gray-100 overflow-hidden flex items-center justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      <h2 className="text-sm font-semibold text-gray-800 group-hover:text-indigo-600">
        {item.name}
      </h2>
    </button>
  );
};

export default ElectronicCategoryCard;
