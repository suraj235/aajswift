"use client";
import Hero from "./components/home/Hero";
import HeroDeets from "./components/home/HeroDeets";
import BookShipmentForm from "./components/home/BookShipmentForm";
import Cards from "./components/home/Ptl";
import ComparisonTable from "./components/home/ComparisonTable";
import AccordionWithImage from "./components/home/AccordianWithImg";
import TransportationDeets from "./components/home/TransportationDeets";
import FaqAccordion from "./components/home/FaqAccordion";
import LatestBlogs from "./components/home/LatestBlogs";
import scrollAnimation from "./components/common/ScrollAnimation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    scrollAnimation.init()
  })

  return (
    <div >
     <Hero />
     <HeroDeets />
     <Cards />
     <ComparisonTable />
     <AccordionWithImage/>
     <TransportationDeets />
     <FaqAccordion />
     <LatestBlogs />
    </div>
  );
}
