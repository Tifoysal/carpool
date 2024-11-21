import React from "react";
import { IoMdStar } from "react-icons/io";

const FiveStar=()=>{
    return(
        <>
            <div className="flex justify-center items-center">
            {/* <IoMdStar className="text-yellow-400"/>
            <IoMdStar className="text-yellow-400"/>
            <IoMdStar className="text-yellow-400"/>
            <IoMdStar className="text-yellow-400"/>
            <IoMdStar className="text-yellow-400"/> */}
            {
                Array.from ({length:5}).map((_,index)=>{
                  return(
                    <>
                    <IoMdStar key={index} className="text-yellow-400"/>
                    </>
                  )
                })
            }
            </div>

        </>
    )
}
export default FiveStar