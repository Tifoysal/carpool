import Image from "next/image";
import React from "react";
import FiveStar from "../shared/rating/FiveStar";
// import FourStar from "../shared/rating/FourStart";
import FourPointFiveStar from "../shared/rating/FourPointFiveStart";


const data = [
  {
    img: '/images/shop/img1.png',
    name: 'Aroma Diffuser',
    rating: <FourPointFiveStar />,
    price: 499,
    inStock: false,
  },
  {
    img: '/images/shop/img2.png',
    name: 'Sport Steering',
    rating: <FiveStar />,
    price: 1499,
    inStock: true,
  },
  {
    img: '/images/shop/img3.png',
    name: 'Car Tyre',
    rating: <FourPointFiveStar />,
    price: 7999,
    inStock: false,
  },
  {
    img: '/images/shop/img4.png',
    name: 'Wheel Rim',
    rating: <FiveStar />,
    price: 24999,
    inStock: true,
  },
  {
    img: '/images/shop/img5.png',
    name: 'Shark Fin',
    rating: <FiveStar />,
    price: 399,
    inStock: false,
  },
  {
    img: '/images/shop/img6.png',
    name: 'Air Freshner',
    rating: <FourPointFiveStar />,
    price: 599,
    inStock: false,
  },
  {
    img: '/images/shop/img7.png',
    name: 'Car Baby Seat',
    rating: <FiveStar />,
    price: 1999,
    inStock: false,
  },
  {
    img: '/images/shop/img8.png',
    name: 'Dashboard Cam',
    rating: <FiveStar />,
    price: 599,
    inStock: false,
  },
  {
    img: '/images/shop/img9.png',
    name: 'Dashboard Doll',
    rating: <FiveStar />,
    price: 299,
    inStock: false,
  },
  {
    img: '/images/shop/img10.png',
    name: 'Wiper Blade',
    rating: <FiveStar />,
    price: 599,
    inStock: false,
  },
];

const Shop = () => {
  return (

    <div className="min-h-screen bg-black py-10">
      <div className="container mx-auto font-serif bg-red-00 px-4 md:px-8 lg:px-16 py-10">
        <div className="text-xl md:text-3xl lg:text-5xl text-yellow-400 font-semibold text-center mb-4">
          GET YOUR ACCESSORIES
        </div>
        <div className="text-sm md:text-base lg:text-lg text-center text-white mb-8">
          We are committed to bringing you the best auto accessories
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8 2xl:grid-cols-10 gap-4">
          {data.map((product, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <div className="relative cursor-pointer bg-green-00 group rounded-xl overflow-hidden">
                <Image
                  src={product.img}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="h-40 w-40 md:h-52 md:w-52 object-cover transition duration-300 group-hover:scale-105"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-yellow-400 bg-opacity-80 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <span className="text-black text-center text-xs md:text-base lg:text-lg font-semibold">
                      Currently Stock Out
                    </span>
                  </div>
                )}
              </div>

              <div className="text-center">
                <div className="text-yellow-400 font-semibold text-sm md:text-base">
                  {product.name}
                </div>
                {/* Add star ratings here if needed */}
                <div className="text-white text-xs md:text-sm font-medium">
                  BDT. {product.price}/-
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Shop;
