"use client";
import { useState } from "react";

const AccordionWithImage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionItems = [
    {
      title: "Streamline Booking Management",
      description:
        "Gain complete real-time visibility into all your bookings, ensuring you stay informed about every aspect of your transportation.",
      imgSrc: "/images/image 65.jpg",
    },
    {
      title: "Unparalleled Real-Time Visibility",
      description: "Gain complete real-time visibility into all your bookings.",
      imgSrc: "/images/image 65.jpg",
    },
    {
      title: "Effortless POD Access",
      description:
        "Easily access your Proof of Delivery documentation at any time.",
      imgSrc: "/images/image 65.jpg",
    },
    {
      title: "Live Shipment Tracking",
      description:
        "Monitor your shipments in real-time for added peace of mind.",
      imgSrc: "/images/image 65.jpg",
    },
    {
      title: "Performance Analysis Made Easy",
      description: "Analyze your freight performance quickly and efficiently.",
      imgSrc: "/images/image 65.jpg",
    },
    {
      title: "Detailed Freight Invoices",
      description:
        "Get in-depth invoices that break down every aspect of your freight costs.",
      imgSrc: "/images/image 65.jpg",
    },
  ];

  const handleToggleImage = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="font-manrope mt-16">
      <h3 className="text-4xl text-primary leading-[44px] text-center px-[189px] ">
        Transforming Transportation with Our Cutting-Edge <br/> Transport Management
        System (TMS)
      </h3>
      <p className="py-5 text-primary text-center max-w-[950px] mx-auto">
        Effortlessly Optimize Your B2B Transportation with Our State-of-the-Art
        Transport Management System (TMS) for Enhanced Efficiency and Control
      </p>

      {/* Accordion Section */}
      <div className="flex flex-col  md:flex-row md:space-x-2 relative">
        <div className="px-20 py-16 bg-black w-3/4  pr-[450px] js-scroll fade-in-left">
          {accordionItems.map((item, index) => (
            <div key={index} className="border-b border-gray-600">
              <div
                className="flex justify-between items-center py-4 cursor-pointer"
                onClick={() => handleToggleImage(index)}
              >
                <h3 className="text-white font-semibold text-xl w-[calc(100%-30px)]">{item.title}</h3>
                <span className=" text-themeRed w-5]">
                  {index === activeIndex ? "-" : "+"}
                </span>
              </div>
              {index === activeIndex && (
                <div className="py-2">
                  <p className="text-gray-400">{item.description}</p>
                </div>
              )}
            </div>
            
          ))}
          <div> <button className="bg-themeRed text-white mt-12 text-center px-4 py-4 w-[380px] h-[50px] rounded transition-colors duration-200">
          Book My PTL Transportation!
        </button> </div>
        </div>

        {/* Image Section */}
        <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 right-0 w-1/2">
          {activeIndex !== null && (
            <img
              src={accordionItems[activeIndex].imgSrc}
              alt={accordionItems[activeIndex].title}
              className={`w-full rounded-md js-scroll fade-in-right ${activeIndex !== null && 'scrolled'}`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AccordionWithImage;
