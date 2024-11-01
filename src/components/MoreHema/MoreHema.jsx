import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const MoreHema = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const items = [
    { img: "/metaHema/1.jpg", title: "HEMA brochure", description: "Enjoy browsing through our offers." },
    { img: "/metaHema/2.webp", title: "Photo service", description: "Photo books, prints, and photo gifts." },
    { img: "/metaHema/3.jpeg", title: "SnowWorld tickets", description: "Now with 40% discount!" },
    { img: "/metaHema/4.jpg", title: "HEMA friends prices", description: "Best deals from friends of HEMA." },
    { img: "/metaHema/5.png", title: "Insurance", description: "The quality of Menzis with HEMA benefits." },
    { img: "/metaHema/6.jpg", title: "Good idea", description: "Contribute to a better world." },
    { img: "/metaHema/7.png", title: "Gift cards", description: "Fun to give and receive!" },
    { img: "/metaHema/8.png", title: "HEMA pass", description: "Save for discounts and free products." },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    afterChange: (index) => setCurrentSlide(index),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const isLastSlide = currentSlide >= items.length - settings.slidesToScroll;

  return (
    <div className="mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 pl-2 text-black">Even More HEMA</h2>
      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {items.map((item, index) => (
            <div key={index} className="card px-4">
              <figure className="py-16 bg-base-200 ">
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-xl transition-transform transform hover:scale-125 h-60 w-52"
                />
              </figure>
              <div className="pt-6 px-2 text-left h-32 shadow">
                <h2 className="font-semibold">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
        {currentSlide > 0 && (
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black text-xl rounded-full p-3 md:p-5 shadow-xl z-10 border-2"
          >
            <FaArrowLeft />
          </button>
        )}
        {!isLastSlide && (
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black text-xl rounded-full p-3 md:p-5 shadow-xl z-10 border-2"
          >
            <FaArrowRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default MoreHema;