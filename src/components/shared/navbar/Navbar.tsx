

"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
const logo = '/images/navbar/logo.png'
// const logo2 = '/images/navbar/logo-2.png'


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const pathname = usePathname();

  // Handle scroll position for background change
  const handleScroll = () => {
    setScroll(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getLinkClass = (path:string) =>
    pathname === path
      ? "text-yellow-400 text-base md:text-lg lg:text-xl cursor-pointer"
      : "text-white text-base md:text-lg lg:text-xl cursor-pointer";

  const handleMenuClose = () => setMenuOpen(false);

  return (
    <>
      <div
        className={`fixed top-0 z-10 w-full font-serif ${
          scroll
            ? "backdrop-blur-lg bg-white/20 border-b border-white/20"
            : "bg-black"
        }`}
      >
        <div className="flex justify-between items-center p-2 px-4">
          <div className="">
          <Image
                                src={logo}
                                alt="Image"
                                width={100}
                                height={100}
                                className="w-1/3 h-1/4"
                            />
          </div>

          <div className="hidden md:flex gap-8">
            <Link href="/">
              <div className={getLinkClass("/")}>Home</div>
            </Link>
            <Link href="/about">
              <div className={getLinkClass("/about")}>About</div>
            </Link>
            <Link href="/service">
              <div className={getLinkClass("/service")}>Services</div>
            </Link>
            <Link href="/team">
              <div className={getLinkClass("/team")}>Team</div>
            </Link>
            <Link href="/shop">
              <div className={getLinkClass("/shop")}>Shop</div>
            </Link>
            <Link href="/blog">
              <div className={getLinkClass("/blog")}>Blog</div>
            </Link>
            <Link href="/contact">
              <div className={getLinkClass("/contact")}>Contact</div>
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <RxCross2 className="text-white" />
              ) : (
                <BiMenuAltRight className="text-white" />
              )}
            </button>
          </div>
        </div>


        {menuOpen && (
          <div className="flex flex-col items-start md:hidden text-white gap-4 p-4">
            <Link href="/" onClick={handleMenuClose}>
              <div className={getLinkClass("/")}>Home</div>
            </Link>
            <Link href="/about" onClick={handleMenuClose}>
              <div className={getLinkClass("/about")}>About</div>
            </Link>
            <Link href="/service" onClick={handleMenuClose}>
              <div className={getLinkClass("/service")}>Services</div>
            </Link>
            <Link href="/team" onClick={handleMenuClose}>
              <div className={getLinkClass("/team")}>Team</div>
            </Link>
            <Link href="/shop" onClick={handleMenuClose}>
              <div className={getLinkClass("/shop")}>Shop</div>
            </Link>
            <Link href="/blog" onClick={handleMenuClose}>
              <div className={getLinkClass("/blog")}>Blog</div>
            </Link>
            <Link href="/contact" onClick={handleMenuClose}>
              <div className={getLinkClass("/contact")}>Contact</div>
            </Link>
          </div>
        )}
      </div>

      {/* <div className="fixed top-0">
         <div>Home</div>
         <div>About</div>
         <div>Blog</div>
      </div> */}
    </>
  );
};

export default Navbar;
