"use client";
import React, { useState } from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineDirections } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import AboutTab from "../tabcomponents/AboutTab";
import ServicesTab from "../tabcomponents/ServicesTab";
import ReviewsTab from "../tabcomponents/ReviewsTab";
import StaffTab from "../tabcomponents/StaffTab";
import GalleryTab from "../tabcomponents/GalleryTab";

const Branches = () => {
  const [activeTab, setActiveTab] = useState("About");

  const renderTabContent = () => {
    switch (activeTab) {
      case "About":
        return <AboutTab />;
      case "Services":
        return <ServicesTab />;
      case "Reviews":
        return <ReviewsTab />;
      case "Staff":
        return <StaffTab />;
      case "Gallery":
        return <GalleryTab />;
      default:
        return <AboutTab />;
    }
  };
  return (
    <div className=" w-full">
      <div className=" w-full max-w-[1200px] mx-auto">
        <div className="div">
          <div className=" bg-[url('/loginpages/pic2.jpg')] bg-cover bg-center w-full h-[300px] pl-2 pt-2">
            <div className=" sticky top-0 z-50 w-10 h-10 rounded-full bg-slate-100 bg-opacity-70 flex justify-center items-center cursor-pointer">
              <IoChevronBackSharp />
            </div>
          </div>

          <div className=" p-[16px]">
            <div className=" flex w-full">
              <div className=" w-[70%]">
                <div className=" flex gap-3 items-center">
                  <div className="div">
                    <h1>Serene Styles</h1>
                  </div>
                  <div className=" px-2 text-[12px] py-1 bg-purple-300 rounded-full text-purple-900">
                    Male
                  </div>
                </div>
                <div className=" flex gap-3 items-center">
                  <div className="div">
                    <CiLocationOn />
                  </div>
                  <div className="div">456 First Ave</div>
                </div>
                <div className=" flex gap-3 items-center">
                  <div className="div">
                    <FaStar className=" text-orange-500" />
                  </div>
                  <div className="div">3.9 (Based on 36 Reviews)</div>
                </div>
              </div>
              <div className=" w-[30%] flex justify-end">
                <div className=" ">
                  <button className="bg-red-50 text-red-600 px-2 py-1 rounded-lg">
                    Closed
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-full flex gap-3 px-[16px]">
            <div className=" w-full flex gap-2 bg-yellow-200 px-3 py-1 rounded-lg items-center cursor-pointer">
              <div className="div">
                <BiPhoneCall />
              </div>
              <div className="div">Call</div>
            </div>
            <div className=" w-full flex gap-2 bg-purple-200 px-3 py-1 rounded-lg items-center cursor-pointer">
              <div className="div">
                <MdOutlineDirections />
              </div>
              <div className="div">Direction</div>
            </div>
            <div className=" w-full flex gap-2 bg-yellow-200 px-3 py-1 rounded-lg items-center cursor-pointer">
              <div className="div">
                <IoShareSocialOutline />
              </div>
              <div className="div">Share</div>
            </div>
          </div>

          <div className="flex gap-8 px-[16px] pl-20 py-[16px] overflow-x-auto whitespace-nowrap">
            <button
              className={`rounded-xl px-3 py-3 text-center text-[14px] font-bold transition-all duration-300
             ${
               activeTab === "About"
                 ? "bg-gray-950 text-white"
                 : "bg-white text-black"
             }`}
              onClick={() => setActiveTab("About")}
            >
              About
            </button>

            <button
              className={`rounded-xl px-3 py-3 text-center text-[14px] font-bold transition-all duration-300
             ${
               activeTab === "Services"
                 ? "bg-gray-950 text-white"
                 : "bg-white text-black"
             }`}
              onClick={() => setActiveTab("Services")}
            >
              Services
            </button>

            <button
              className={`rounded-xl px-3 py-3 text-center text-[14px] font-bold transition-all duration-300
             ${
               activeTab === "Reviews"
                 ? "bg-gray-950 text-white"
                 : "bg-white text-black"
             }`}
              onClick={() => setActiveTab("Reviews")}
            >
              Reviews
            </button>

            <button
              className={`rounded-xl px-3 py-3 text-center text-[14px] font-bold transition-all duration-300
             ${
               activeTab === "Staff"
                 ? "bg-gray-950 text-white"
                 : "bg-white text-black"
             }`}
              onClick={() => setActiveTab("Staff")}
            >
              Staff
            </button>

            <button
              className={`rounded-xl px-3 py-3 text-center text-[14px] font-bold transition-all duration-300
             ${
               activeTab === "Gallery"
                 ? "bg-gray-950 text-white"
                 : "bg-white text-black"
             }`}
              onClick={() => setActiveTab("Gallery")}
            >
              Gallery
            </button>
          </div>
          <div className="mt-4">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Branches;
