"use client";
import React from "react";
import Image from "next/image";
import Icon1 from "../../assets/Services/stock.png";
import Icon2 from "../../assets/Services/platform.png";
import Icon3 from "../../assets/Services/analysis.png";
import Icon4 from "../../assets/Services/content.png";
import Icon5 from "../../assets/Services/exchange.png";
import Icon6 from "../../assets/Services/trade.png";
import Container from "@/components/library/Container";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import Title from "@/components/library/Title";
import Subtitle from "../library/Subtitle";

const Services = () => {
  return (
    <Container className="py-20">
      <Title>Explore Our Bullion Services</Title>
      <Subtitle>
      Access everything you need to buy, sell, and securely store physical gold, silver, and platinum with confidence.
      </Subtitle>

      <motion.div
        variants={fadeIn("up", 0.15)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 mt-10 text-darkGray"
      >
        {/* cart 1  */}
        <div className="overflow-hidden 3xl:h-44 transition-all hover:-translate-y-[6px] bg-gradient-to-b from-darkOne to-darkTwo  border border-b-transparent border-darkThree p-6 rounded-xl text-white duration-500 ease-in-out">
          <div className="w-full flex items-center justify-start gap-3">
            <Image
              src={Icon1}
              alt="Trad Icon"
              width={40}
              height={40}
              placeholder="blur"
            />
            <h3 className="font-semibold">Live Bullion Pricing</h3>
          </div>
          <p className="text-sm font-medium mt-3 text-darkGray">
          Track real-time gold, silver, and platinum prices so you can buy or sell at the moment that suits you.
          </p>
        </div>
        {/* cart 2  */}
        <div className="overflow-hidden 3xl:h-44 transition-all hover:-translate-y-[6px] bg-gradient-to-b from-darkOne to-darkTwo  border border-b-transparent border-darkThree p-6 rounded-xl text-white duration-500 ease-in-out">
          <div className="w-full flex items-center justify-start gap-3">
            <Image
              src={Icon3}
              alt="Trad Icon"
              width={40}
              height={40}
              placeholder="blur"
            />
            <h3 className="font-semibold">Secure Storage Options</h3>
          </div>

          <p className="text-sm font-medium mt-3 text-darkGray">
          Store your bullion in fully insured, professional-grade vaults across global locations of your choice.
          </p>
        </div>
        {/* cart 3  */}
        <div className="overflow-hidden 3xl:h-44 transition-all hover:-translate-y-[6px] bg-gradient-to-b from-darkOne to-darkTwo  border border-b-transparent border-darkThree p-6 rounded-xl text-white duration-500 ease-in-out">
          <div className="w-full flex items-center justify-start gap-3">
            <Image
              src={Icon2}
              alt="Trad Icon"
              width={40}
              height={40}
              placeholder="blur"
            />
            <h3 className="font-semibold">Market Insights & Guidance</h3>
          </div>

          <p className="text-sm font-medium mt-3 text-darkGray">
          Stay informed with clear insights and helpful resources designed to support smarter precious-metal decisions.
          </p>
        </div>
        {/* cart 4  */}
        <div className="overflow-hidden 3xl:h-44 transition-all hover:-translate-y-[6px] bg-gradient-to-b from-darkOne to-darkTwo  border border-b-transparent border-darkThree p-6 rounded-xl text-white duration-500 ease-in-out">
          <div className="w-full flex items-center justify-start gap-3">
            <Image
              src={Icon4}
              alt="Trad Icon"
              width={40}
              height={40}
              placeholder="blur"
            />
            <h3 className="font-semibold">Simple, Intuitive Platform</h3>
          </div>

          <p className="text-sm font-medium mt-3 text-darkGray">
          Buy, sell, or withdraw your bullion effortlessly through a clean and easy-to-use interface
          </p>
        </div>
        {/* cart 5  */}
        <div className="overflow-hidden 3xl:h-44 transition-all hover:-translate-y-[6px] bg-gradient-to-b from-darkOne to-darkTwo  border border-b-transparent border-darkThree p-6 rounded-xl text-white duration-500 ease-in-out">
          <div className="w-full flex items-center justify-start gap-3">
            <Image
              src={Icon5}
              alt="Trad Icon"
              width={40}
              height={40}
              className="rounded-md"
            />
            <h3 className="font-semibold">Wide Selection of Metals</h3>
          </div>

          <p className="text-sm font-medium mt-3 text-darkGray">
          Access physical gold, silver, and platinum in various forms and quantities to suit your investment goals.
          </p>
        </div>
        {/* cart 6  */}
        <div className="overflow-hidden 3xl:h-44 transition-all hover:-translate-y-[6px] bg-gradient-to-b from-darkOne to-darkTwo  border border-b-transparent border-darkThree p-6 rounded-xl text-white duration-500 ease-in-out">
          <div className="flex items-center justify-start gap-3">
            <Image
              src={Icon6}
              alt="Trad Icon"
              width={40}
              height={40}
              placeholder="blur"
            />
            <h3 className="font-semibold">Integrated Account Management</h3>
          </div>

          <p className="text-sm font-medium mt-3 text-darkGray">
          Manage your holdings, view your balances, and request withdrawals seamlessly — all in one secure account.
          </p>
        </div>
      </motion.div>
    </Container>
  );
};

export default Services;
