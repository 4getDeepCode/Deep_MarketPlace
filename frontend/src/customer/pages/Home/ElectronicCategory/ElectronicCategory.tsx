import { useAppSelector } from "../../../../Redux Toolkit/Store";
import ElectronicCategoryCard from "./ElectronicCategoryCard";

const ElectronicCategory = () => {

  const { homePage } = useAppSelector((store) => store);

  return (
    <section className="border-b border-gray-300 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-6">
          {homePage.homePageData?.electricCategories
            ?.slice(0, 7)
            ?.map((item) => (
              <ElectronicCategoryCard key={item.categoryId} item={item} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ElectronicCategory;
