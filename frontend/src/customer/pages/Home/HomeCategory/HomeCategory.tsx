
import HomeCategoryCard from "./HomeCategoryCard";

const HomeCategory = () => {
  return (
   
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6  gap-4">
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1].map((item, index) => (
            <HomeCategoryCard key={index} />
          ))}
        </div>
      </div>
 
  );
};

export default HomeCategory;
