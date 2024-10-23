"use client";
import Image from "next/image";

const HeroDeets = () => {
  return (
    <div className="h-full w-full container mx-auto">
      <h3 className="mt-14 text-4xl text-primary leading-[44px] font-medium font-manrope text-center"> Empowering Businesses with Part Truck Load <br />(PTL) Transportation Solutions </h3>
      <p className="text-center text-primary max-w-[950px] mx-auto mt-7 font-manrope text-base ">We understand the unique transportation challenges faced by B2B Enterprises. Often, SMEs have cargo that doesn't require a full truckload (FTL) but booking one can be costly. That's where our Part Truck Load (PTL) service comes in, designed specifically to cater to the needs of B2B Enterprises.</p>
      <Image
        src="/images/Background.jpg"
        width={1673.5}
        height={506}
        alt="Frame-1"
        className="mx-auto js-scroll fade-in-bottom"
      />
    </div>
  )
}

export default HeroDeets
