"use client";
import React from 'react';

const BlogCard = ({ date, title, image }) => (
  <div className="bg-white rounded-[15px]  shadow-md group relative js-scroll fade-in-bottom">
    <div className='flex flex-col justify-between'>
    <div className="">
      <p className="text-[#888888] px-4 pt-4 leading-6">{date}</p>
      <h3 className="text-2xl px-4 pt-4 min-h-[110px] mt-2 mb-8 ">{title}</h3>
    </div>
    <img src={image} alt={title} className=" w-full z-[20] relative h-48 object-cover rounded-b-[15px] group-hover:rounded-b-none   " />
    </div>
    <div className=" z-[10] absolute bottom-0 left-0 right-0 bg-white  transform -translate-y-10 group-hover:translate-y-14 transition-transform duration-300 ease-in-out shadow-lg rounded-[15px] hover:rounded-b-none px-8 py-5 ">
      <a href="#" className="text-red-600  font-medium hover:underline">
        Read More →
      </a>
    </div>
  </div>
);

const BlogCards = () => {
  const blogs = [
    {
      date: "June 27, 2024",
      title: "What are the Warehouse Costs? - Tips to Optimize Warehousing Costs",
      image: "/images/blogPicture1.jpg"
    },
    {
      date: "June 27, 2024",
      title: "Top 10 Logistics Companies in Gurgaon  [Gurugram] - 2024",
      image: "/images/blogPicture2.jpg"
    },
    {
      date: "June 27, 2024",
      title: "Meesho Seller Panel - How to Sell Products on Meesho Supplier?",
      image: "/images/blogPicture3.jpg"
    }
  ];

  return (
    <div className="pt-10  max-w-[1150px] mx-auto font-manrope">
      <h2 className="  text-4xl text-[#272727] leading-[50px] text-left font-medium">Latest Blogs</h2>
      
      <div className="  grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
      <div className="text-center  mt-8">
        <button className="bg-themeRed text-white px-6 py-2 rounded-md  transition-colors duration-300">
          View All
        </button>
      </div>
    </div>
  );
};

export default BlogCards;