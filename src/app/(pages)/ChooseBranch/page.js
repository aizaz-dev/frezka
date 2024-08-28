import React from "react";
import { IoStar } from "react-icons/io5";
import { MdOutlineDirections } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";


const products = [
  {
    id: 1,
    imageUrl: "/loginpages/pic1.jpg",
    shope: "Glamour Cuts",
    category: "Male",
    location: "123 Main St",
    travel: "12185.93 KMs",
    direction: "From Your Location",
    ratings: "4.2",
    reviews: "(Based on 66 Reviews)",
    text: "open",
  },
  {
    id: 2,
    imageUrl: "/loginpages/pic2.jpg",
    shope: "Serene Styles",
    category: "Female",
    location: "456 First Ave",
    travel: "12661.46 KMs",
    direction: "From Your Location",
    ratings: "3.9",
    reviews: "(Based on 36 Reviews)",
    text: "closed",
  },
  {
    id: 3,
    imageUrl: "/loginpages/pic3.jpg",
    shope: "Trendy Trims",
    category: "Unisex",
    location: "789 Seconds St",
    travel: "1134.77 KMs",
    direction: "From Your Location",
    ratings: "3.9",
    reviews: "(Based on 54 Reviews)",
    text: "closed",
  },
];

const page = () => {
  return (
    <div className=" w-full bg-gray-100 ">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className=" w-full sm:h-[100px] h-[60px] bg-pink-950 rounded-b-[30px] flex items-center justify-center  sticky top-0 z-50">
          <div className=" text-white">
            <h1>Choose Branch</h1>
          </div>
        </div>
        <div className=" w-full p-[16px] sm:px-[80px] py-[16px] flex flex-col gap-4">
          {products.map((item) => {
            return (
              <div key={item.id} className=" w-full rounded-xl">
                <div className=" w-full h-[200px] rounded-t-xl">
                  <img
                    src={item.imageUrl}
                    alt=""
                    className=" w-full h-full object-cover object-center rounded-t-xl"
                  />
                </div>
                <div className=" w-full p-4 flex flex-col gap-2 bg-white rounded-b-xl">
                  <div className=" flex gap-2 items-center">
                    <div className=" text-black font-bold">{item.shope}</div>
                    <div className=" w-fit bg-purple-200 text-purple-950 rounded-full text-[10px] px-2 py-1">
                      {item.category}
                    </div>
                  </div>
                  <div className=" flex gap-2 items-center">
                    <div className="div"><CiLocationOn /></div>
                    <div className="div">{item.location}</div>
                  </div>

                  <div className=" flex gap-2 items-center">
                    <div className="div"><MdOutlineDirections /></div>
                    <div className=" font-bold">{item.travel}</div>
                    <div className="div">{item.direction}</div>
                  </div>
                  <div className=" flex gap-2 items-center">
                    <div className="div"><IoStar className="text-orange-400"/></div><span className=" font-semibold">{item.ratings}</span>
                    <div className=" flex justify-between items-center w-full">
                    <div className="div">{item.reviews}</div>
                      <button className=" px-2 py-1 bg-red-50 text-red-600 rounded-lg">{item.text}</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
