import ProductCard from "../ProductCard/ProductCard";

const SimilarProduct = () => {
  const product = {
    images: [
      "https://ik.imagekit.io/4sjmoqtje/tr:w-1000,c-at_max/cdn/shop/files/green-tissue-saree-with-bead-and-cutdana-embroidery-sg338770-1.jpg?v=1757674612",
      "https://ik.imagekit.io/4sjmoqtje/tr:w-1000,c-at_max/cdn/shop/files/green-tissue-saree-with-bead-and-cutdana-embroidery-sg338770-4.jpg?v=1757674612",
      "https://ik.imagekit.io/4sjmoqtje/tr:w-1000,c-at_max/cdn/shop/files/green-tissue-saree-with-bead-and-cutdana-embroidery-sg338770-3.jpg?v=1757674612",
      "https://ik.imagekit.io/4sjmoqtje/tr:w-1000,c-at_max/cdn/shop/files/green-tissue-saree-with-bead-and-cutdana-embroidery-sg338770-6.jpg?v=1757674612",
    ],
  };

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {[1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
          <div
            key={index}
            className="transform transition hover:-translate-y-1 hover:shadow-xl"
          >
            <ProductCard item={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimilarProduct;
