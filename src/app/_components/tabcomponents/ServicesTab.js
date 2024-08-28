import React from "react";

const ServicesTab = () => {
  const products = [
    {
      id: 1,
      imgUrl: "/loginpages/pic1.jpg",
      name: "Beard Trim",
      time: "01 Hour",
      price: "$50.00",
    },
    {
      id: 2,
      imgUrl: "/loginpages/pic2.jpg",
      name: "Men's Haircut",
      time: "30 Minutes",
      price: "$400.00",
    },
    {
      id: 3,
      imgUrl: "/loginpages/pic3.jpg",
      name: "Buzz Cut",
      time: "55 Minutes",
      price: "$2000.00",
    },
    {
      id: 4,
      imgUrl: "/loginpages/pic1.jpg",
      name: "Fade Cut",
      time: "02 Hour",
      price: "$2000.00",
    },
  ];

  return (
    <div className=" px-[16px] flex flex-col gap-3">
      {products.map((item) => {
        return (
          <div
            key={item.id}
            className=" w-full bg-white rounded-xl p-4 flex justify-between items-center "
          >
            <div className="flex gap-2">
              <div className=" flex justify-center items-center">
                <img
                  src={item.imgUrl}
                  alt="img"
                  className="w-[40px] h-[40px] rounded-full object-cover object-center"
                />
              </div>
              <div className=" flex flex-col  ">
                <div className=" font-bold text-black text-[14px]">
                  {item.name}
                </div>
                <div className=" text-gray-600 text-[12px]">{item.time}</div>
              </div>
            </div>
            <div className=" font-bold text-purple-950">{item.price}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesTab;
