import React from "react";
import { MdEdit } from "react-icons/md";
import { FaBorderAll } from "react-icons/fa";
import { CiGift } from "react-icons/ci";
import { TfiLocationPin } from "react-icons/tfi";
import { CiSettings } from "react-icons/ci";
import { TfiHelpAlt } from "react-icons/tfi";
import { LuLogOut } from "react-icons/lu";
import { CiCircleAlert } from "react-icons/ci";

const products = [
  {
    id: 1,
    icon: <FaBorderAll />,
    title: "Orders",
    subtitle: "See your orders",
  },
  {
    id: 2,
    icon: <CiGift />,
    title: "Coupons",
    subtitle: "My Discount Coupons",
  },
  {
    id: 3,
    icon: <TfiLocationPin />,
    title: "My Addresses",
    subtitle: "Manage your addresses",
  },
  {
    id: 4,
    icon: <CiSettings />,
    title: "Setting",
    subtitle: "Change Password,App Language,Theme,Delete Account",
  },
  {
    id: 5,
    icon: <CiCircleAlert />,
    title: "About App",
    subtitle: "Rate Us,Share,About",
  },
  {
    id: 6,
    icon: <TfiHelpAlt />,
    title: "Help",
    subtitle: "Help Center,Privacy Policy,T&C",
  },
  {
    id: 7,
    icon: <LuLogOut />,
    title: "Logout",
    subtitle: "Logout your account",
  },
];

const page = () => {
  return (
    <div className=" w-full bg-gray-50">
      <div className=" w-full max-w-[1200px] mx-auto">
        <div className="div">
          <div className=" w-full bg-pink-800 h-[120px] rounded-b-2xl">
            <div className="text-center py-8">
              <h1 className=" text-white font-bold ">Profile</h1>
            </div>
          </div>

          <div className=" flex justify-center items-center flex-col ">
            <div className=" w-28 h-28 rounded-full border-2 border-white border-solid -mt-12 bg-[url('/loginpages/pic1.jpg')] bg-center bg-cover flex items-end justify-end ">
              <div className=" w-8 h-8 bg-pink-800 rounded-full border-2 border-solid border-white flex justify-center items-center">
                <MdEdit className=" text-white" />
              </div>
            </div>
            <div className=" pt-4">
              <h1 className=" font-bold">John Doe</h1>
            </div>
            <div className="div">
              <p className="text-gray-600 text-[14px]">john@gmail.com</p>
            </div>
          </div>

          <div className=" flex flex-col gap-4 px-[16px]">
            {products.map((item) => {
              return (
                <div
                  key={item.id}
                  className=" w-full flex items-center gap-4 bg-white rounded-lg p-4"
                >
                  <div className=" text-gray-500">{item.icon}</div>
                  <div className=" flex flex-col ">
                    <div className=" text-[14px] font-bold">{item.title}</div>
                    <div className=" text-[14px] text-gray-600">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" py-3">
            <p className=" text-center">v3.1.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
