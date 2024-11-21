import React from "react";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";

const FourPointFiveStar=()=>{
    return(
        <>
            <div className="flex justify-center items-center">           
            {
                Array.from ({length:4}).map((_,index)=>{
                  return(
                    <>
                    <IoMdStar key={index} className="text-yellow-400"/>
                    </>
                  )
                })
            }
            {
                Array.from ({length:1}).map((_,index)=>{
                  return(
                    <>
                    <IoMdStarHalf key={index} className="text-yellow-400"/>
                    </>
                  )
                })
            }
            </div>

        </>
    )
}
export default FourPointFiveStar