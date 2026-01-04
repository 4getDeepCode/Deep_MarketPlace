import { useEffect, useState } from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router";

const ProductCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % item.images.length);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isHovered, item.images.length]);

  return (
    <div
      onClick={() =>
        navigate(`/product-details`)
      }
      className="group relative rounded-xl bg-white p-3 shadow-sm transition-all duration-300 hover:shadow-lg"
    >
      {/* Image */}
      <div
        className="relative h-[260px] w-full overflow-hidden rounded-lg bg-gray-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {item.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`product-${index}`}
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500"
            style={{
              transform: `translateX(${(index - currentImage) * 100}%)`,
            }}
          />
        ))}
      </div>

      {/* Details */}
      <div className="pt-3 space-y-1">
        <h1 className="text-sm font-semibold text-gray-800 truncate">
          {item.seller?.businessDetails?.businessName}
        </h1>

        <p className="text-sm text-gray-600 truncate">Green Tissue Saree</p>

        <div className="flex items-center gap-2 text-sm">
          <span className="font-semibold text-gray-900">₹2499</span>
          <span className="text-gray-400 line-through">₹3999</span>
          <span className="font-semibold text-emerald-600">10% off</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
