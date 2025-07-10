import React from "react";
import Heading from "../comman/Heading";
import Image from "next/image";
import Pragraph from "../comman/Pragraph";
import { stakingData } from "../helper/Helper";

export default function Staking() {
  return (
    <>
      <div className="bg-[#100F1F] xl:py-[80px_119px] lg:py-[80px] md:py-[70px] py-[40px]">
        <div className="max-w-[1284px] xl:px-10 lg:px-8 md:px-6 px-4 mx-auto">
          <div className="flex flex-col lg:gap-5 md:gap-4 gap-3 xl:mb-15 lg:mb-12 md:mb-8 mb-6">
            <div className="flex flex-col gap-2">
              <Heading className={"text-center"} title={"Staking"} />
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
              className={"!text-[#9E9AB4] max-w-[741px] text-center mx-auto"}
              title={
                "Staking involves locking up a certain amount of $BST within the platform for a predetermined period. In return, stakers receive rewards in the form of additional $BST tokens, essentially earning interest on their staked amount."
              }
            />
          </div>
          <div className="flex  min-[900px]:w-[33%] md:w-[100%] flex-wrap justify-center lg:gap-6 md:gap-4 gap-3 w-full">
            {stakingData.map((item, index) => (
              <div
                key={index}
                className="bg-[url('/assets/png/bg-image-2.png')] flex flex-col lg:gap-5 md:gap-4 gap-3 border-1 lg:py-[42px] md:py-[30px] py-[25px] xl:px-[40px] px-[20px] min-[900px]:max-w-[376px] w-full"
                style={{ backgroundSize: "100% 100%" }}
              >
                <h3 className="lg:text-[25px] md:text-xl text-lg  font-bold leading-[150%] text-white ff-Alegreya-Sans">
                  {item.title}
                </h3>

                <ul className="flex flex-col lg:gap-[10px] md:gap-2 gap-1  text-[#9E9AB4] leading-[150%]">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="lg:text-lg md:text-base text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
