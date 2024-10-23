import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import "../../../app/globals.css";

const Header = () => {
  return (
    <nav className="py-4 bg-white border-b font-sans shadow-md sticky top-0 z-[10000]">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between ">
        <div className="w-3/4 flex items-center">
          <Link href="/" passHref>
            <Image
              src="/images/logo.svg"
              alt="AAJ Logo"
              width={151}
              height={30}
              className="w-[150px] h-[30px]"
              priority
            />
          </Link>

          {/* Center - Navigation Links */}
          <div className="flex space-x-6 text-primary sm:space-x-12 ml-20 menu-items">
            <Link
              href="/"
              className="transition-colors duration-200 "
            >
              Company
            </Link>
            <Link
              href="/"
              className="transition-colors duration-200 "
            >
              Calculate Shipping Cost
            </Link>
            <Link
              href="/"
              className="transition-colors duration-200 font-hk-grotesk"
            >
              Blogs
            </Link>
            <Link
              href="/"
              className="transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right - Track Shipment & Login Button */}
        <div className=" w-1/4 flex items-center space-x-6 sm:space-x-8">
          <Link
            href="/"
            className="text-themeRed underline flex items-center transition-colors duration-200 whitespace-nowrap font-semibold"
          >
            <CiLocationOn  />
            Track Shipment
          </Link>

          <button className="bg-themeRed text-white px-10 py-2 w-[141.07 px]h-[40px] rounded  transition-colors duration-200">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
