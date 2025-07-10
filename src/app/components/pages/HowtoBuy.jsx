import React from "react";
import Heading from "../comman/Heading";
import Image from "next/image";
import Pragraph from "../comman/Pragraph";
import { stepsData } from "../helper/Helper";

function HowtoBuy() {
  return (
    <>
      <div className="bg-[#100F1F] xl:py-[120px_100px] lg:py-[90px_80px] md:py-[60px_50px] py-[35px]">
        <div className="max-w-[1284px] xl:px-10 lg:px-8 md:px-6 px-4 mx-auto">
          <div className="flex flex-col lg:gap-5 md:gap-4 gap-3 xl:mb-15 lg:mb-12 md:mb-8 mb-6">
            <div className="flex flex-col gap-2">
              <Heading className={"text-center"} title={"How to Buy"} />
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
              className={"!text-[#9E9AB4] text-center"}
              title={
                "A STEP-BY-STEP WALKTHROUGH ON HOW TO PURCHASE $CHANCER TOKENS."
              }
            />
          </div>
          <div className="flex lg:gap-5 md:gap-4 gap-3 justify-between w-full max-[900px]:flex-wrap max-[900px]:justify-center relative">
            <Image
              className="absolute left-60 top-5 xl:max-w-[258px] max-w-[180px] max-[900px]:hidden"
              src={"/assets/png/left.png"}
              alt="left"
              width={258}
              height={43}
            />
            <Image
              className="absolute right-60 top-5 xl:max-w-[258px] max-w-[180px] max-[900px]:hidden"
              src={"/assets/png/right.png"}
              alt="right"
              width={258}
              height={43}
            />
            {stepsData.map((step, index) => (
              <div
                key={index}
                className="bg-[url('/assets/png/bg-image-2.png')] lg:py-[50px] md:py-[40px] py-[30px] xl:px-[40px] px-8  min-[900px]:w-[33%]"
                style={{ backgroundSize: "100% 100%" }}
              >
                {step.icon && (
                  <div className="flex justify-center lg:mb-[30px] md:mb-[25px] mb-[20px]">
                    <img
                      src={step.icon}
                      alt="step icon"
                      className="lg:max-w-[50px] md:max-w-[40px] max-w-[30px]"
                    />
                  </div>
                )}

                <h3 className="text-[#C2BF28] xl:text-[25px] lg:text-[20px] md:text-lg text-base font-bold text-center leading-[150%] lg:mb-4 md:mb-3 mb-2">
                  {step.title}
                </h3>

                <ul className="flex flex-col lg:gap-2 gap-1">
                  {step.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="text-[#9E9AB4] lg:text-base md:text-sm text-xs leading-[150%] font-normal text-center"
                    >
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

export default HowtoBuy;
