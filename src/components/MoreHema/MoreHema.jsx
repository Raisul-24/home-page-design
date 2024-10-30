import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const MoreHema = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNextArrow, setShowNextArrow] = useState(true);
  const [showPrevArrow, setShowPrevArrow] = useState(false);

  const items = [
    { img: "/public/metaHema/1.jpg", title: "HEMA brochure", description: "Enjoy browsing through our offers." },
    { img: "/public/metaHema/2.webp", title: "photo service", description: "Photo books, prints and photo gifts with your own photos." },
    { img: "/public/metaHema/3.jpeg", title: "SnowWorld tickets", description: "now with 40% discount" },
    { img: "/public/metaHema/4.jpg", title: "HEMA friends prices", description: "discover the best deals from the friends of HEMA" },
    { img: "/public/metaHema/5.png", title: "insurance", description: "The quality of Menzis combined with the benefits of HEMA." },
    { img: "/public/metaHema/6.jpg", title: "good idea", description: "How do you make things that make life more fun and also contribute to a better world?" },
    { img: "/public/metaHema/7.png", title: "gift cards", description: "The gift that is fun to give and receive!" },
    { img: "/public/metaHema/8.png", title: "HEMA pass", description: "Save all year round for extra discounts, free products and limited editions." },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: showNextArrow ? <CustomNextArrow /> : null,
    prevArrow: showPrevArrow ? <CustomPrevArrow /> : null,
    afterChange: (index) => handleSlideChange(index),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const handleSlideChange = (index) => {
    setCurrentSlide(index);

    // Update arrow visibility
    if (index === 0) {
      setShowPrevArrow(false);
    } else {
      setShowPrevArrow(true);
    }

    if (index >= items.length - 4) {
      setShowNextArrow(false);
    } else {
      setShowNextArrow(true);
    }
  };

  return (
    <div className="mx-auto py-10">
      <h2 className="text-2xl font-semibold mb-6">Even More HEMA</h2>
      <Slider {...settings} key={`${showNextArrow}-${showPrevArrow}`}>
        {items.map((item, index) => (
          <div key={index} className="card shadow-xl px-4">
            <figure className="py-16 bg-base-200">
              <img
                src={item.img}
                alt={item.title}
                className="rounded-xl transition-transform transform hover:scale-105 h-60 w-60"
              />
            </figure>
            <div className="pt-6 px-2 text-left h-32">
              <h2 className="font-semibold">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-5 shadow-xl cursor-pointer z-10"
      onClick={onClick}
    >
     <FaArrowRight />
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-5 shadow-xl cursor-pointer z-10"
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
};

export default MoreHema;
