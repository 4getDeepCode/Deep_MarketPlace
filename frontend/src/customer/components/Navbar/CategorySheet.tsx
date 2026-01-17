import { Box } from "@mui/material";
import { menLevelTwo } from "../../../data/Category/level two/menLevelTwo";
import { womenLevelTwo } from "../../../data/Category/level two/womenLevelTwo";
import { electronicsLevelTwo } from "../../../data/Category/level two/electronicsLavelTwo";
import { furnitureLevelTwo } from "../../../data/Category/level two/furnitureLevleTwo";
import { menLevelThree } from "../../../data/Category/level three/menLevelThree";
import { womenLevelThree } from "../../../data/Category/level three/womenLevelThree";
import { electronicsLevelThree } from "../../../data/Category/level three/electronicsLevelThree";
import { furnitureLevelThree } from "../../../data/Category/level three/furnitureLevelThree";
import { useNavigate } from "react-router-dom";

const categoryTwo: { [key: string]: any[] } = {
  men: menLevelTwo,
  women: womenLevelTwo,
  electronics: electronicsLevelTwo,
  home_furniture: furnitureLevelTwo,
};



const categoryThree: { [key: string]: any[] } = {
  men: menLevelThree,
  women: womenLevelThree,
  electronics: electronicsLevelThree,
  home_furniture: furnitureLevelThree,
};

const CategorySheet = ({
  selectedCategory,
  toggleDrawer,
  setShowSheet,
}: any) => {
  const navigate = useNavigate();

  const childCategory = (category: any, parentCategoryId: any) => {
    return category.filter((child: any) => {
      return child.parentCategoryId == parentCategoryId;
    });
  };
  
  const handleCategoryClick = (category: string) => {
    if (toggleDrawer) {
      toggleDrawer(false)();
    }
    if (setShowSheet) {
      setShowSheet(false);
    }

    navigate("/products/" + category);
  };

  return (
    <Box className="bg-white shadow-lg  lg:h-[500px] overflow-y-auto">
      <div className=" flex text-sm flex-wrap">
        {categoryTwo[selectedCategory]?.map((item: any, index) => (
          <div
            key={item.name}
            className={`p-8 lg:w-[20%] ${
              index % 2 == 0 ? "bg-slate-50" : "bg-white"
            }`}
          >
            <p className="text-[#1E90FF] mb-3 font-semibold">{item.name}</p>

            <ul className="space-y-1">
              {childCategory(
                categoryThree[selectedCategory],
                item.categoryId
              )?.map((item: any) => (
                <div key={item.name}>
                  <li
                    onClick={() => handleCategoryClick(item.categoryId)}
                    className="hover:text-[#1E90FF] cursor-pointer"
                  >
                    {item.name}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default CategorySheet;

