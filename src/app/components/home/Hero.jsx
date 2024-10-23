import Image from "next/image";
import BookShipmentForm from "./BookShipmentForm";

const Hero = () => {
  return (
    <div className="relative font-manrope  h-[80vh]">
      {/* Background Image */}
      <div className="hero-gradient w-full h-full z-100 absolute top-0 left-0"></div>
      <Image
        src="/images/hero-sec.svg"
        width={1368}
        alt="Hero Image"
        height={540}
        className="w-full h-full object-cover  "
      />
      {/* Content Container */}
      <div className=" z-10  mx-auto  ">
        {/* Left Side - Text Content */}
        <div className=" absolute bottom-0 pb-[15%] pl-[5%] mt-[5% ] text-white ">
          <h1 className="text-[40px] leading-[48px]">
            Streamlined PTL
            <br />
            Solutions for Your
            <br /> Business
          </h1>
          <p className="text-base leading-6 mt-4">
            Efficient, Reliable, and Cost-Effective <br />
            Transportation Services Tailored to Your Needs
          </p>
        </div>

        {/* Right side form */}
        <BookShipmentForm />  
        
      </div>
      
    </div>
  );
};

export default Hero;
