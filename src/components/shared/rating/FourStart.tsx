import React from "react";
import { IoMdStar } from "react-icons/io";

const FourStar=()=>{
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
            </div>

        </>
    )
}
export default FourStar