import { useNavigate } from "react-router";

const DealCard = ({ deal }: { deal: Deal }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/products/${deal.category.categoryId}`)}
      className=" group w-full cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-[13rem] w-full overflow-hidden bg-gray-100">
        <img
          src={deal.category.image}
          alt="Deal"
          className=" w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110 "
        />

        <div className=" absolute top-3 left-3 rounded-full bg-pink-600 px-3 py-1 text-sm font-bold text-white shadow-lg ">
          {deal.discount}% OFF
        </div>
      </div>

      <div className=" bg-white p-1 text-center border-t border-gray-300 transition-all duration-300 group-hover:bg-indigo-50 ">
        <p className="text-base font-semibold text-indigo-600 tracking-wide">
          Shop Now
        </p>

        <p className="text-sm text-gray-500">Limited time offer</p>
      </div>
    </div>
  );
};

export default DealCard;
