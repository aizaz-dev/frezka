import React from "react";

const AboutTab = () => {
  const products = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 6:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "9:00 AM - 6:00 PM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "9:00 AM - 6:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00 AM - 6:00 PM",
    },
    {
      id: 5,
      day: "Friday",
      time: "9:00 AM - 6:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "9:00 AM - 6:00 PM",
    },
    {
      id: 7,
      day: "Sunday",
      time: "9:00 AM - 6:00 PM",
    },
  ];

  return (
    <div className=" px-[16px]">
      <div className=" pb-4">
        <h1 className=" font-bold text-black text-[14px]">Working Hours</h1>
      </div>
      <div className=" flex flex-col gap-2">
        {products.map((item) => {
          return (
            <div key={item.id} className=" flex justify-between items-center">
              <div className=" text-gray-600 text-[12px]">{item.day}</div>
              <div className=" font-bold text-black text-[12px]">
                {item.time}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutTab;
