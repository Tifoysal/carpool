import Image from "next/image";
import React from "react";
const img1 = '/images/contact/img1.png'
const Contact = () => {
    return (
        <>
            <div className="min-h-screen bg-black ">
                <div className="container mx-auto py-10">

                    <div className="grid grid-cols-1 lg:grid-cols-2 bg-red-00">
                        <div className="bg-red-00 col-span-1 order-2 lg:order-1  text-7xl md:text-9xl font-extrabold  text-yellow-400 flex justify-center items-center">
                            GET IN <br /> TOUCH <br /> TODAY
                        </div>
                        <div className="bg-blue-00 col-span-1 order-1 lg:order-2">
                            <Image
                                src={img1}
                                alt="Image"
                                width={800}
                                height={800}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                </div>


<div className="w-full bg-yellow-400 py-6">
  <div className="grid grid-cols-1 gap-y-6 md:grid-cols-3 text-center px-4 md:px-8 lg:px-16 md:py-4 lg:py-12">
    {/* Mailing Address */}
    <div className="col-span-1">
      <div className="italic font-semibold text-lg sm:text-xl md:text-2xl">MAILING ADDRESS</div>
      <div className="italic font-medium text-sm sm:text-base md:text-lg">House: 34 Rd No: 2, Dhaka 1229</div>
    </div>

    {/* Email */}
    <div className="col-span-1">
      <div className="italic font-semibold text-lg sm:text-xl md:text-2xl">EMAIL US</div>
      <div className="italic font-medium text-sm sm:text-base md:text-lg">info.carpoolbd@gmail.com</div>
    </div>

    {/* Contact Number */}
    <div className="col-span-1">
      <div className="italic font-semibold text-lg sm:text-xl md:text-2xl">CONTACT NUMBER</div>
      <div className="italic font-medium text-sm sm:text-base md:text-lg">01842025387</div>
    </div>
  </div>
</div>

            </div>



        </>
    )
}
export default Contact