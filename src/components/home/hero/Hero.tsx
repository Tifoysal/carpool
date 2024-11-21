import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="w-full h-full font-serif relative flex  justify-center items-center"
        style={{
          backgroundImage: `url('/images/home/homePage.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10">
          <div className="flex flex-col justify-center items-center text-center">
            <div className="text-yellow-400 text-5xl md:text-7xl lg:text-9xl font-extrabold text-center">
              CARPOOL
            </div>
            <div className="text-lime-500 text-5xl md:text-7xl lg:text-9xl font-bold text-center">
              BANGLADESH
            </div>
            <div className="mt-4">
              <Link
                href={"https://www.facebook.com/groups/1043741160579601/?_rdr"}
                target="_blank"
              >
                <div className="px-4 lg:px-6 py-2 lg:py-4 bg-yellow-300 hover:bg-yellow-500 hover:text-white duration-300 hover:scale-95">
                  <button className="text-xl font-semibold">JOIN TODAY</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
