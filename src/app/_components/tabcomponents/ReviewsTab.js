import React from 'react';
import { FaStar } from "react-icons/fa6";


const ReviewsTab = () => {

const products = [
  {
    id: 1,
    rating: 3,
    name: "Jonessa Crist",
    feedback: "Very nice",
    date: "21 Aug",
  },
  {
    id: 2,
    rating: 4,
    name: " Crist",
    feedback: "Good service",
    date: "21 Aug",
  },  {
    id: 3,
    rating: 5,
    name: "Alice Thompson",
    feedback: "Awasome service",
    date: "21 Aug",
  },
  {
    id: 4,
    rating: 4,
    name: "Winifred Kuvalis",
    feedback: "Nice",
    date: "21 Aug",
  },

]
  return (
    <div className=' px-[16px]'>
      <div className=" flex justify-between items-center">
        <div className=" text-[14px] font-bold text-black">Reviews <span className='text-gray-600 text-[12px] font-normal'>(Based on 30 Reviews)</span></div>
        <div className=" cursor-pointer text-purple-950  text-[14px] pr-2">View All</div>
      </div>

      <div className=" flex flex-col gap-2 py-[16px]">
        {products.map((item)=>{
          return(
            <div key={item.id} className=" flex justify-between p-4 rounded-lg bg-white">
              <div className=" flex flex-col">
                <div className=" flex gap-2">
                  <div className=" flex justify-center items-center px-2  rounded-lg bg-slate-100 gap-2">
                    <div className=" flex justify-center items-center">
                    <FaStar className=' text-amber-500'/>
                    </div>
                    <div className="div">{item.rating}</div>
                  </div>
                  <div className=" text-black text-[14px] font-bold">{item.name}</div>
                </div>
                <div className=" text-gray-600 text-[12px]">{item.feedback}</div>
              </div>
              <div className=" text-gray-600 text-[12px]">{item.date}</div>

            </div>
          )
        })}
      </div>

    </div>
  )
}

export default ReviewsTab