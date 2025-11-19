"use client";
import Container from "@/components/library/Container";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import Title from "@/components/library/Title";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GrResources } from "react-icons/gr";
import Image from "next/image";
import bg from "../../assets/why-nextrade.webp";
import Subtitle from "../library/Subtitle";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { SiSpringsecurity } from "react-icons/si";
import { FaArrowDownShortWide } from "react-icons/fa6";

const WhyChooseUs = () => {
  return (
    <Container className=" py-5 text-zinc-200">
      <Title animation={false} className="text-start text-primary">
        Why AU
      </Title>
      <Subtitle animation={false} className="text-start w-5/6 pb-3">
        {" "}
        At AU, we make buying, selling, and storing precious metals simple, secure, and 
        <br />
        cost-effective — here&rsquo;s what sets us apart.
      </Subtitle>
      {/* content */}
      <div className="xl:flex xl:-mt-16 flex-row-reverse items-center justify-between gap-10">
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="flex-[2] flex justify-end"
        >
          <Image
            alt="why-nextrade-image"
            src={bg}
            style={{ width: "80%", height: "auto" }}
            className="-scale-x-100"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="w-full flex-[3] grid lg:grid-cols-2 grid-cols-1 gap-5 "
        >
          <div className="flex gap-3">
            <MdOutlineSettingsSuggest className="text-6xl text-primary" />

            <div className="">
              {" "}
              <h3 className="text-lg font-semibold">Ease of Use</h3>
              <p className="text-sm font-medium text-gray-400">
              A clean, intuitive platform that makes purchasing and managing your bullion effortless.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <SiSpringsecurity className="text-6xl text-primary" />
            <div className="">
              {" "}
              <h3 className="text-lg font-semibold">Safety</h3>
              <p className="text-sm font-medium text-gray-400">
              Your gold, silver, and platinum are protected in fully insured, high-security vaults around the world.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <FaArrowDownShortWide className="text-6xl text-primary" />
            <div className="">
              {" "}
              <h3 className="text-lg font-semibold">Low Charges</h3>
              <p className="text-sm font-medium text-gray-400">
              Industry-leading storage and transaction fees help you keep more of your investment.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <FaMoneyBillTransfer className="text-6xl text-primary" />
            <div className="">
              {" "}
              <h3 className="text-lg font-semibold">Fast Transaction</h3>
              <p className="text-sm font-medium text-gray-400">
              Buy or sell instantly, with quick settlement and prompt transfers when you need your funds.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <GrResources className="text-6xl text-primary" />
            <div className="">
              {" "}
              <h3 className="text-lg font-semibold">Educational Recourses</h3>
              <p className="text-sm font-medium text-gray-400">
              Clear guides and helpful insights to support smarter bullion decisions.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <MdOutlineSupportAgent className="text-6xl text-primary" />
            <div className="">
              {" "}
              <h3 className="text-lg font-semibold">Fast Support</h3>
              <p className="text-sm font-medium text-gray-400">
              Assistance whenever you need help or have questions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default WhyChooseUs;
