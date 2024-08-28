
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    id: 1,
    imageUrl: "/loginpages/pic1.jpg",
    title: "Find your Nearest Salon",
    description:
      "You can Find Easily Near by you Best Barber and salon and enjoy best services experience",
    text: "Next",
  },
  {
    id: 2,
    imageUrl: "/loginpages/pic2.jpg",
    title: "Pick A Service",
    description:
      "You can choose your service and choose your specialist and get quick booking",
    text: "Next",
  },
  {
    id: 3,
    imageUrl: "/loginpages/pic3.jpg",
    title: "Quick Booking",
    description:
      "You get best services and best specialist of your services of our Frezka",
    text: "Get Started",
  },
];

const page = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // medium screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
        {/* <Loginfirstpage/> */}
        <div className="w-full">
      <div className="w-full relative max-w-[1200px] mx-auto px-[16px] sm:px-[80px]">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-[150px] bg-pink-800 -z-10"
          style={{ borderRadius: "0px 0px 50px 50px" }}
        ></div>

        <div className="flex justify-between items-center  py-4">
          <div></div>
          <div className=" text-white">Frezka</div>
          <div className="cursor-pointer text-white">Skip</div>
        </div>
        <Slider {...settings}>
          {products.map((item) => (
            <div key={item.id} className=" pb-10 sm:pb-4 ">
              <div className=" w-full sm:h-[450px] sm:px-24  h-[350px] rounded-lg overflow-hidden">
                <img
                  src={item.imageUrl}
                  className="w-full h-full sm:object-contain object-cover rounded-lg"
                  alt={item.title}
                />
              </div>
              <div className="text-center py-4 font-[500] text-[14px]">
                {item.title}
              </div>
              <div className="text-center text-gray-600 text-[10px]">
                {item.description}
              </div>
              <div className=" flex justify-center py-3">
                <button className=" px-[80px] py-3 bg-gray-900 text-white text-[14px] rounded-lg ">
                  {item.text}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </div>
  )
}

export default page