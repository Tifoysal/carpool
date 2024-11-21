
import Image from "next/image";
import Link from "next/link";
import React from "react";
const img1 = '/images/blog/img1.png'
const img2 = '/images/blog/img2.png'
const img3 = '/images/blog/img3.png'
const Blog=()=>{
    return(
        <>
       
<div className="min-h-screen bg-black py-10 px-2 text-white font-serif">
       
<div className="container mx-auto ">

<div className="flex flex-col md:flex-row md:gap-6 justify-center items-center">      
  <div className="flex basis-1/4 md:order-1 ">
    <Image
      src={img1}
      alt="Image"
      width={500}
      height={500}
      className="w-full h-auto"
    />
  </div>
  <div className="flex flex-col justify-end items-start gap-6 basis-3/4 md:order-2 mt-4 md:mt-0 ">       
    <div className="font-semibold text-xl">Install the CarpoolBD App for Better Connectivity & Response</div>
    <div className="font-normal text-lg">
      From now on, you do not need to visit the website and log in to
      your profile for updates as the Carpool app is available for
      Android & iOS users.
      <Link href={'https://www.facebook.com/carpoolbd1'} target="_blank">
      <span className="ml-2 text-teal-200 underline cursor-pointer transform transition-transform duration-300 hover:scale-95">
        Read More      
      </span>
      </Link>
    </div>
    <div className="text-xs font-normal">5th November, 2024, 4 min read</div>
  </div>
</div>

<div className="flex flex-col md:flex-row md:gap-6 justify-center items-center mt-6">
  {/* Image section */}
  <div className="flex basis-1/4 order-1 md:order-2">
    <Image
      src={img2}
      alt="Image"
      width={500}
      height={500}
      className="w-full h-auto"
    />
  </div>

  {/* Content section */}
  <div className="flex flex-col justify-end items-start gap-6 basis-3/4 order-2 md:order-1 ">
    <div className="font-semibold text-xl">Use Bkash & Get Cashback Offer</div>
    <div className="font-normal text-lg">
      Pay via Bkash to get BDT. 100/- cashback if your total payment
      exceeds BDT. 5,000/- Please keep Bkash as your payment method
      in the CarpoolBD App or web profile.
      <Link href={'https://www.facebook.com/carpoolbd1'} target="_blank">
      <span className="ml-2 text-teal-200 underline cursor-pointer transform transition-transform duration-300 hover:scale-95">
        Read More      
      </span>
      </Link>
    </div>
    <div className="text-xs font-normal">15th November, 2024, 4 min read</div>
  </div>
</div>

<div className="flex flex-col md:flex-row md:gap-6 justify-center items-center mt-6">      
  <div className="flex basis-1/4 md:order-1">
    <Image
      src={img3}
      alt="Image"
      width={500}
      height={500}
      className="w-full h-auto"
    />
  </div>
  <div className="flex flex-col justify-end items-start gap-6 basis-3/4 md:order-2 mt-4 md:mt-0 ">       
    <div className="font-semibold text-xl">Install the CarpoolBD App for Better Connectivity & Response</div>
    <div className="font-normal text-lg">
      From now on, you do not need to visit the website and log in to
      your profile for updates as the Carpool app is available for
      Android & iOS users.
      <Link href={'https://www.facebook.com/carpoolbd1'} target="_blank">
      <span className="ml-2 text-teal-200 underline cursor-pointer transform transition-transform duration-300 hover:scale-95">
        Read More      
      </span>
      </Link>
    </div>
    <div className="text-xs font-normal">5th November, 2024, 4 min read</div>
  </div>
</div>

</div>
</div>
</>
    )
}
export default Blog