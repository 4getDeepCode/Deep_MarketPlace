import { useNavigate } from "react-router";
import { useAppSelector } from "../../../../Redux Toolkit/Store";

type GridItemProps = {
  image?: string;
  col: string;
  row: string;
  categoryId?: string | number;
};

const GridItem = ({ image, col, row, categoryId }: GridItemProps) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (!categoryId) return;
    navigate(`/products/${categoryId}`);
  };
  return (
    <div
      onClick={handleNavigate}
      className={`${col} ${row} cursor-pointer group relative overflow-hidden rounded-2xl`}
    >
      <img
        src={image}
        alt="fashion"
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="absolute bottom-5 left-5 translate-y-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <button
          onClick={(e) => {
            e.stopPropagation(); // prevents double trigger
            handleNavigate();
          }}
          className="rounded-full cursor-pointer bg-white/90 px-4 py-1.5 text-sm font-semibold text-gray-900 hover:bg-white"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

const Grid = () => {
  const { homePage } = useAppSelector((store) => store);
  return (
    <section className="bg-white py-6">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid h-auto grid-cols-12 grid-rows-12 gap-4 lg:h-[600px]">
          <GridItem
            col="col-span-12 md:col-span-3"
            row="row-span-12"
            image={homePage.homePageData?.grid?.[0]?.image}
            categoryId={homePage.homePageData?.grid?.[0]?.categoryId}
          />

          <GridItem
            col="col-span-6 md:col-span-2"
            row="row-span-6"
            image={homePage.homePageData?.grid?.[1]?.image}
          />

          <GridItem
            col="col-span-6 md:col-span-4"
            row="row-span-6"
            image={homePage.homePageData?.grid?.[2]?.image}
          />

          <GridItem
            col="col-span-12 md:col-span-3"
            row="row-span-12"
            image={homePage.homePageData?.grid?.[3]?.image}
          />

          <GridItem
            col="col-span-6 md:col-span-4"
            row="row-span-6"
            image={homePage.homePageData?.grid?.[4]?.image}
          />

          <GridItem
            col="col-span-6 md:col-span-2"
            row="row-span-6"
            image={homePage.homePageData?.grid?.[5]?.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Grid;
