"use client";
import React from "react";
import Image from "next/image";

const features = [
  {
    title: "Efficient and Cost-Effective",
    description:
      "Our PTL service allows B2B Enterprises to transport their goods efficiently at lower cost through reliable and premium transporters.",
    imageUrl: "/images/Img 1.svg",
  },
  {
    title: "Digital",
    description:
      "We help businesses take their transportation management online with 100% POD access and real time tracking of shipments in one dashboard.",
    imageUrl: "/images/Img 2.svg",
  },
  {
    title: "Reliable and Timely",
    description:
      "With AAJ Swift, you can trust reliable and on-time deliveries, helping you meet your commitments to your customers.",
    imageUrl: "/images/Img 3.svg",
  },
  {
    title: "Seamless Integration",
    description:
      "PTL shipments seamlessly integrate with our advanced Transport Management System (TMS), providing you with enhanced efficiency and control over your logistics.",
    imageUrl: "/images/Img 4.svg",
  },
];

const Feature = ({ title, description, imageUrl }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-left text-left h-full js-scroll fade-in-bottom">
    <div className="w-16 h-16 relative  mb-4">
      <Image
        src={imageUrl}
        alt={title}
        style={{ objectFit: 'contain' }} 
        className="ml-2"
        fill
      />
    </div>
    <h3 className="text-lg leading-6 font-semibold mb-3 min-h-[40px] text-primary">{title}</h3>
    <p className="text-primary">{description}</p>
  </div>
);

const Ptl = () => {
  return (
    <div className="bg-black text-white pt-12 pb-20">
      <div className="max-w-[1200px] mx-auto">
        <h3 className="text-4xl leading-[44px] font-medium text-center mb-8">
          PTL (Part Truck Load) Transportation Optimized
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ptl;
