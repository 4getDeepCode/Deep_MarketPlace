import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../../Redux Toolkit/Store";
import { useEffect } from "react";
import { getAllProducts } from "../../../../Redux Toolkit/Customer/ProductSlice";
import SimilarProductCard from "./SimilarProductCard";

const SimilarProduct = () => {
 const { products } = useAppSelector((store) => store);
  const dispatch = useAppDispatch();
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      dispatch(getAllProducts({ category: categoryId }));
    }
  }, [categoryId, dispatch]);

  return (
    
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.products.map((item) => (
          <div
            key={item._id}
            className="transform transition hover:-translate-y-1 hover:shadow-xl"
          >
            <SimilarProductCard product={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimilarProduct;
