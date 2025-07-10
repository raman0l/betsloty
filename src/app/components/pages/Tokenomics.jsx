import React from "react";
import Heading from "../comman/Heading";
import Image from "next/image";
import Pragraph from "../comman/Pragraph";
import { tokenData } from "../helper/Helper";

function Tokenomics() {
  return (
    <>
      <div
        className="bg-[linear-gradient(180deg, rgba(25,23,47,0.00)_0%,#19172F_100%)
] xl:py-[100px_120px] lg:py-[80px_100px] md:py-[50px_70px] py-[40px_50px]"
      >
        <div className="max-w-[1284px] xl:px-10 lg:px-8 md:px-6 px-4 mx-auto">
          <div className="flex flex-col lg:gap-5 md:gap-4 gap-3 xl:mb-15 lg:mb-12 md:mb-8 mb-6">
            <div className="flex flex-col gap-2">
              <Heading className={"text-center"} title={"Tokenomics"} />
              <div>
                <Image
                  className="xl:max-w-[490px] lg:max-w-[420px]  md:max-w-[350px] max-w-[250px]  mx-auto"
                  src={"/assets/svg/line.svg"}
                  alt="line"
                  width={490}
                  height={3}
                />
              </div>
            </div>

            <Pragraph
              className={"!text-[#9E9AB4] max-w-[845px] text-center mx-auto"}
              title={
                "The tokenomics of $BST is carefully designed to drive utility, incentivize player engagement, ensure sustainability, and enhance platform growth. It reflects Betsloty Casino commitment to creating a balanced ecosystem where all stakeholders, from players to investors, benefit."
              }
            />
          </div>
          <div className="flex gap-5 justify-between items-center md:flex-nowrap flex-wrap-reverse">
            <div className="flex flex-col lg:gap-5 md:gap-4 gap-3 w-full">
              <Heading
                title={"Token Specifications"}
                className={
                  "lg:!text-[31px] md:!text-2xl !text-xl font-bold leading-[130%]"
                }
              />

              <div
                className="bg-[url('/assets/png/bg-image-3.png')] py-[39px] px-[30px_20px] max-w-[376px]"
                style={{ backgroundSize: "100% 100%" }}
              >
                <ul className="flex flex-col lg:gap-5 md:gap-4 gap-3">
                  {tokenData.map((item, index) => (
                    <li
                      key={index}
                      className="text-[#FAFAFF] opacity-80 text-xs lg:text-sm xl:text-base font-normal leading-[160%]"
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mx-auto">
              <Image
                className=" xl:max-w-[715px] lg:max-w-[550px] md:max-w-[450] max-w-[300px] max-[400px]:max-w-[250px] mx-auto"
                src={"/assets/png/srcall-image.png"}
                alt="srcall-image"
                width={715}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tokenomics;
