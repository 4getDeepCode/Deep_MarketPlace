import { useAppSelector } from "../../../Redux Toolkit/Store";
import HomeCategoryTable from "./HomeCategoryTable";

const ShopByCategoryTable = () => {
    const { homePage } = useAppSelector((store) => store);
  return (
    <HomeCategoryTable categories={homePage.homePageData?.shopByCategories}/>
  )
}

export default ShopByCategoryTable