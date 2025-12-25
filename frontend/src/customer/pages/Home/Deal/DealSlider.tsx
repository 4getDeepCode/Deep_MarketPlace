

import DealCard from "./DealCard";
import Slider from "react-slick";

const DealSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
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
            {[1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
              <div key={index} className="px-2">
                <DealCard
                  deal={{
                    image:
                      "https://rukminim2.flixcart.com/image/612/612/xif0q/sports-action-camera/9/f/k/gift-taking-photos-recording-videos-sports-and-action-camera-kid-original-imahhx84ukpbkyyp.jpeg?q=70",
                    discount: "10",
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default DealSlider;
