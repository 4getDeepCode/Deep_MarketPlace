

const HomeCategoryCard = () => {
  return (
    <div className=" group flex flex-col items-center gap-2 rounded-full bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer " >
      <div className="w-full aspect-square rounded-full bg-gray-100 overflow-hidden flex items-center justify-center ">

        <img
          src="https://rukminim1.flixcart.com/image/120/120/xif0q/office-study-chair/z/t/2/1-teak-sagun-58-42-js-29-beaatho-121-92-original-imagrwgshgp2bhwv.jpeg?q=80"
          alt=""
          className=" w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 " />

      </div>

      <h1 className="text-sm font-semibold text-gray-800 group-hover:text-indigo-600">
        Chair
      </h1>

    </div>
  );
};

export default HomeCategoryCard;
