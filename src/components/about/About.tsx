import React from "react";

import Image from "next/image";
import Link from "next/link";

const img1 = '/images/about/img1.png'

const About = () => {
    return (
        <>
            <div className="w-full h-full font-serif"
style={{
  backgroundImage: `url('/images/about/background.png')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  width: "100vw", 
}}
>
<div className="container mx-auto h-full flex items-center z-10">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-4">
    {/* Text Section */}
    <div className="col-span-1 order-2 md:order-1 flex flex-col justify-center  p-8 rounded-lg">
      <div className="text-xl md:text-3xl lg:text-5xl text-yellow-400 font-semibold mb-6">
        ABOUT US
      </div>
      <p className="text-sm md:text-base lg:text-xl text-white mb-4">
        Carpool Bangladesh is the first platform that provides office
        commuters with affordable rides by connecting bikers or car
        riders on the same route and time under a monthly contract.
        Riders on long intercity trips can also offer their empty seats
        for passengers.
      </p>
      <Link
        href={"/about/about-details"}
        target="_blank"
        className="text-sm md:text-base lg:text-xl underline hover:text-yellow-300 duration-300 hover:scale-95 cursor-pointer text-white"
      >
        Learn More
      </Link>
    </div>

    {/* Image Section */}
    <div className="col-span-1 order-1 md:order-2 flex items-center justify-center">
      <Image
        src={img1}
        alt="About Us Image"
        width={400}
        height={400}
        className="w-full h-auto rounded-lg"
      />
    </div>
  </div>
</div>

</div>
        </>
    )
}
export default About


