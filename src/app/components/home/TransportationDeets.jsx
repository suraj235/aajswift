"use client";
import Image from "next/image";

const cities = [
  { location_name: "Delhi", location_url:'#', black_icon: "/images/Delhi_black.svg", red_icon: "/images/Delhi_red.svg" },
  { location_name: "Mumbai", location_url:'#', black_icon: "/images/mumbai_black.svg", red_icon: "/images/mumbai_red.svg" },
  { location_name: "Kolkata", location_url:'#', black_icon: "/images/Kolkata_black.svg", red_icon: "/images/Kolkata_red.svg" },
  { location_name: "Ghaziabad", location_url:'#', black_icon: "/images/Ghaziabad_black.svg", red_icon: "/images/Ghaziabad_red.svg" },
  { location_name: "Banglore", location_url:'#', black_icon: "/images/Banglore_black.svg", red_icon: "/images/Banglore_red.svg" },
  { location_name: "Hyderabad", location_url:'#', black_icon: "/images/Hyderabad_black.svg", red_icon: "/images/Hyderabad_red.svg" },
  { location_name: "Delhi", location_url:'#', black_icon: "/images/Delhi_black.svg", red_icon: "/images/Delhi_red.svg" },
  { location_name: "Mumbai", location_url:'#', black_icon: "/images/mumbai_black.svg", red_icon: "/images/mumbai_red.svg" },
  { location_name: "Kolkata", location_url:'#', black_icon: "/images/Kolkata_black.svg", red_icon: "/images/Kolkata_red.svg" },
];

const TransportationDeets = () => {
  return (
    <div className="pt-10 pb-20 max-w-[1150px] mx-auto font-manrope">
      <h3 className="text-4xl leading-[44px] text-primary text-left font-medium">Transportation</h3>
      <p className="py-2 text-left text-secondary">
        The company expanded its presence to multiple locations, enhancing its
        reach and <br />
        accessibility to diverse markets
      </p>
      <div className="flex flex-wrap items-start justify-between gap-8 pt-10">
          <Image
            src="/images/truck.jpg"
            width={480}
            height={440}
            alt="Frame-2"
            className="rounded-lg"
          />
        {/* City Icons on the Right */}
        <div className="w-full md:w-1/2 grid grid-cols-2 items-start md:grid-cols-3 gap-x-6 gap-y-0 -mt-4">
          {cities.map((city, index) => (
            <a
              href={city.location_url}
              key={index}
              className="flex flex-col items-center space-y-2 p-4  rounded-lg   hover:bg-red-50 transition-colors duration-200"
              onMouseOver={(e) => ( e.target.children.length>0 && (e.target.children[0].src = city.red_icon))}
              onMouseLeave={(e) => (e.target.children.length>0 && (e.target.children[0].src = city.black_icon))}
            >
              {/* Icon */}
              <Image
                src={city.black_icon}
                alt={city.location_name}
                width={70}
                height={70} 
                className="min-h-[65px]"
              />

              {/* City Name */}
              <p
                className="text-center text-[#272727] font-manrope "
              >
                Transportation in {city.location_name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransportationDeets;
