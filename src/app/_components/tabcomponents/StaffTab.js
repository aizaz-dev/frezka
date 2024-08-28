import React from "react";
import Image from "next/image";
import Link from "next/link";

const experts = [
  {
    name: "Olivia Wilson",
    rating: 4.0,
    image: "/loginpages/pic1.jpg",
    starColor: "text-green-500",
  },
  {
    name: "Ava Megan",
    rating: 4.2,
    image: "/loginpages/pic1.jpg",
    starColor: "text-green-500",
  },
  {
    name: "Oscar Rhys",
    rating: 4.3,
    image: "/loginpages/pic1.jpg",
    starColor: "text-green-500",
  },
  {
    name: "Birdie Hirthe",
    rating: 4.2,
    image: "/loginpages/pic1.jpg",
    starColor: "text-green-500",
  },
  {
    name: "Manager Salon",
    rating: 3.8,
    image: "/loginpages/pic1.jpg",
    starColor: "text-orange-500",
  },
  {
    name: "Erling Veum",
    rating: 3.8,
    image: "/loginpages/pic1.jpg",
    starColor: "text-orange-500",
  },
];

const StaffTab = () => {
  return (
    <div className="w-full mx-auto py-6 px-[16px]">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-2xl font-semibold">Top Experts</h2>
        <Link href="/topexpert_allview">
          <div className="text-pink-600 font-semibold">View All</div>
        </Link>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
        {experts.map((expert, index) => (
          <Link href="/sub_expert" key={index}>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center relative pt-8">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-24 h-24 mb-[20px]">
                <Image
                  src={expert.image}
                  alt={`Photo of ${expert.name}`}
                  className="rounded-full border-4 border-white"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="mt-12 text-[14px] font-semibold">{expert.name}</h3>
              <div className={`flex items-center justify-center mt-2 ${expert.starColor}`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.691h4.18c.969 0 1.372 1.24.588 1.81l-3.396 2.463a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.539 1.118l-3.396-2.463a1 1 0 00-1.176 0l-3.396 2.463c-.784.57-1.839-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.295 9.395c-.784-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.691l1.286-3.967z" />
                </svg>
                <span className="ml-2 text-gray-800 text-[14px]">{expert.rating}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StaffTab;
