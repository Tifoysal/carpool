import React from "react";
import Image from "next/image";

const services = [
  {
    img: "/images/service/img1.png",
    category: "Share Trip",
    type: "One Way",
    description:
      "Share your empty seats or book seats in long-haul one-way journeys instead of preferring bus, rail, or air service at an affordable cost and nearby drop-pick-up points. Passengers have to pay 10% in advance after fixing the fare through bidding.",
  },
  {
    img: "/images/service/img2.png",
    category: "Carpool",
    type: "Monthly Contract",
    description:
      "In a monthly contract, share your empty seats with office commuters on the same route and time. Passengers have to pay 20% in advance after fixing the fare through bidding only in the first month.",
  },

  {
    img: "/images/service/img3.png",
    category: "Bikepool",
    type: "Monthly Contract",
    description:
      "In a monthly contract, share your bike with an office commuter on the same route and time. The passenger has to pay 20% in advance after fixing the fare through bidding only in the first month.",
  },
];

const Service = () => {
  return (
    <>
      <div className=" bg-black min-h-screen py-10 px-2">
        <div className="container mx-auto ">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="text-xl md:text-3xl lg:text-5xl text-yellow-400 font-semibold  ">
              WHAT WE OFFER
            </div>
            <div className="text-sm md:text-base lg:text-lg text-white">
              We are committed to bringing you the best carpooling experience.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
              {services.map((service, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className="col-span-1 flex flex-col gap-6  justify-center items-center"
                    >
                      <div className="text-white text-base md:text-xl lg:text-3xl font-serif">
                        {service.category}
                      </div>
                      <div className="relative cursor-pointer ">
                        <Image
                          src={service.img}
                          alt="Image"
                          width={800}
                          height={800}
                          className="h-auto w-full rounded-xl "
                        />
                        <div className="rounded-xl absolute inset-0 opacity-0 hover:opacity-100 hover:bg-yellow-400 duration-300 flex justify-center items-center text-sm  md:text-base font-serif p-4">
                          {service.description}
                        </div>
                      </div>
                      <div className="text-white text-base md:text-xl lg:text-3xl font-serif">
                        {service.type}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
