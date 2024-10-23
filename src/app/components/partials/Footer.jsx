import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white pt-32 font-manrope">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center  justify-between mb-8 border-b border-[#BEBEBE]">
          <div className="flex items-center mb-9 ">
            <img src="/images/logo.svg" alt="AAJ swift logo" className="w-[200px] h-[40px]" />
            <p className=" ml-16">
              Optimizing supply chains through<br />
              warehousing and transportation services
            </p>
          </div>
          <div className="flex space-x-4">
            <Link href="#">
            <div className='rounded-full border border-[#C6BBBB] p-3'><Image
                src="/images/linkedin.svg"  
                alt="linkedin"
                width={24}
                height={24}
              /></div>
              
            </Link>
            <Link href="#" >
            <div className='rounded-full border border-[#C6BBBB] p-3'><Image
                src="/images/instagram.svg"  
                alt="linkedin"
                width={24}
                height={24}
              /></div>
            </Link>
            <Link href="#" >
            <div className='rounded-full border border-[#C6BBBB] p-3'><Image
                src="/images/youtube.svg"  
                alt="youtube"
                width={24}
                height={24}
                className='w-6 h-6'
              /></div>
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-5 mt-12 gap-8 mb-8 text-primary">
          <div>
            <h3 className="text-xl font-medium mb-5">Company</h3>
            <ul className="space-y-2 ">
              <li><Link href="#" >Our Story</Link></li>
              <li><Link href="#" >Careers at AAJ</Link></li>
              <li><Link href="#" >Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-5">Services</h3>
            <ul className="space-y-2 ">
              <li><Link href="#" >E Commerce Fulfillment</Link></li>
              <li><Link href="#" >Transport-AAJ Swift</Link></li>
              <li><Link href="#" >Returns Management</Link></li>
              <li><Link href="#" >Value Added Services</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-5">Resources</h3>
            <ul className="space-y-2 ">
              <li><Link href="#" >Case Studies</Link></li>
              <li><Link href="#">Blogs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-5">Support</h3>
            <ul className="space-y-2 ">
              <li><Link href="#" >Track Your Order</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-5">Transportation Network</h3>
            <ul className="space-y-2 ">
              {['Mumbai', 'Bangalore', 'Delhi', 'Hyderabad', 'Ghaziabad', 'Sonipat NCR'].map((city) => (
                <li key={city}>
                  <Link href="#" >Transportation in {city}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#BEBEBE] pt-8 pb-10 flex justify-between items-center text-[14px] leading-6 ">
          <p>&copy;2024 AAJ Swift. All Rights Reserved</p>
          <p>ISO 9001: 2015, ISO 27001: 2013 Certified Company CIN: L63090DL2011PLC221234</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;