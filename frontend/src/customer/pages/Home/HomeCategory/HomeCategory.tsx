
import { useAppSelector } from "../../../../Redux Toolkit/Store";
import HomeCategoryCard from "./HomeCategoryCard";

const HomeCategory = () => {
   const { homePage} = useAppSelector((store) => store);
  return (
   
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5  gap-4">
          {homePage.homePageData?.shopByCategories?.slice(0, 15)?.map((item) => (
            <HomeCategoryCard 
            key={item._id}
            item={item} 
            />
          ))}
        </div>
      </div>
 
  );
};

export default HomeCategory;
