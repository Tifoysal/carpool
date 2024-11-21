import React from "react";

const AboutDetails = () => {
  return (
    <>
      <div className="h-screen bg-black py-10 px-2">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center gap-8">
            <div className="text-xl md:text-2xl lg:text-3xl text-center italic font-serif font-semibold text-yellow-400">
              Carpool Bangladesh: Affordable, Eco-friendly, and Safe Carpooling
              for All
            </div>

            <div className="flex flex-col justify-center items-center gap-4">
              <div className="text-sm md:text-base lg:text-lg text-justify font-serif font-normal text-white">
                Carpool Bangladesh is Bangladesh’s premier carpooling platform,
                uniquely designed to connect passengers with riders (both car
                and bike) who share the same route and timing. The platform
                offers two main services: monthly contractual carpooling, ideal
                for regular commuters like office-goers, and one-way,
                long-distance carpooling for riders traveling on the same route.
              </div>

              <div className="text-sm md:text-base lg:text-lg text-justify font-serif font-normal text-white">
                Our mission is to provide affordable, reliable, and secure
                transport options, especially catering to the needs of office
                commuters and female passengers who prioritize safety. By
                promoting carpooling, Carpool Bangladesh helps to optimize
                vehicle use, reduce traffic congestion, and significantly lower
                carbon emissions.
              </div>

              <div className="text-sm md:text-base lg:text-lg text-justify font-serif font-normal text-white">
                Carpool Bangladesh brings efficiency and affordability, making
                it a sustainable choice for daily travelers. With the power of
                carpooling, we aim to transform the daily commute experience
                while contributing to a cleaner, greener Bangladesh. Join the
                community of conscious commuters and help build a sustainable
                future with Carpool Bangladesh.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutDetails;
