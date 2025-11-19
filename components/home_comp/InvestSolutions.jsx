"use client";
import React from "react";
import investImage from "../../assets/invest-solution.png";
import Image from "next/image";
import Container from "@/components/library/Container";

//framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../utils/variants";
import Title from "@/components/library/Title";

const InvestSolutions = () => {
  return (
    <Container className="py-20">
      <div className="flex flex-col 2xl:flex-row items-center justify-between 2xl:gap-20">
        {/* Image side */}
        <motion.div
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="flex-1"
        >
          <Image
            src={investImage}
            alt="Invest"
            priority
            style={{ width: "100%", height: "100%" }}
          />
        </motion.div>

        {/* Content side */}
        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="flex-1"
        >
          <Title className="text-start pt-10">
            {" "}
            Hedge Against Currency Devaluations
          </Title>
          <motion.ul
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="text-sm mt-5 font-medium text-darkGray"
          >
            <motion.li
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
            >
              Our platform gives private investors direct access to the professional bullion markets, offering some of the lowest prices for buying, selling, and storing gold, silver, and platinum.
            </motion.li>

            <motion.li
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="my-5"
            >
              We are one of the leading online precious-metals services, safeguarding billions in assets.
            </motion.li>
            <motion.li
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
            >
            Your metal is held in secure, fully insured vaults located in Abuja, Accra or Cape Town — you choose the location. Our scale allows us to offer exceptionally low storage fees with insurance included.
            </motion.li>
            <motion.li
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="my-5"
            >
              Sell whenever you want with no penalties, and funds are typically wired the next business day. You may also take physical delivery of your bars.
            </motion.li>
            <motion.li
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="my-5"
            >
              Getting started is simple. You can own physical precious metals within minutes.
            </motion.li>
            <motion.li
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="my-5"
            >
             Open a free account today — no obligation to trade — and receive 1/16 oz of silver (2 g) to try the service risk-free.
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </Container>
  );
};

export default InvestSolutions;
