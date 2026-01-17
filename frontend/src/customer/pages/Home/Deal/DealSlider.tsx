import { useAppSelector } from "../../../../Redux Toolkit/Store";
import DealCard from "./DealCard";
import Slider from "react-slick";

const DealSlider = () => {
  const { homePage } = useAppSelector((store) => store);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // Large screen
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 lg:px-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            🔥 Hot Deals You Can’t Miss
          </h2>
          <button className="text-sm font-medium text-indigo-600 hover:underline">
            View All
          </button>
        </div>

        <div className="overflow-hidden">
          <Slider {...settings}>
            {homePage.homePageData?.deals?.map((item) => (
              <div className="px-2">
                <DealCard deal={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default DealSlider;
