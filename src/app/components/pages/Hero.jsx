import React from "react";
import Pragraph from "../comman/Pragraph";
import {
  CopyIcon,
  Day20Icon,
  Hours5Icon,
  Min30Icon,
  Sec15Icon,
} from "../helper/Icon";
import Image from "next/image";
import { heroData } from "../helper/Helper";

function Hero() {
  return (
    <>
      <div className="bg-[url('/assets/png/bg-hero.png')] bg-cover bg-center overflow-hidden xl:py-[73px_93px] lg:py-[60px_70px] md:py-[50px_60px] py-[35px]">
        <div className="max-w-[1284px] xl:px-10 lg:px-8 md:px-6 px-4 mx-auto gap-5 justify-between flex max-[700px]:flex-wrap items-center">
          <div className="flex flex-col lg:gap-10 md:gap-7 gap-5">
            <div className="flex flex-col xl:gap-[30px] lg:gap-6 md:gap-5 gap-3">
              <h1 className="xl:text-[49px] lg:text-[40px] md:text-3xl text-2xl text-white font-bold leading-[120%] max-w-[571px] ff-Alegreya-Sans">
                Betsloty Casino Your Safe Haven for Online Crypto Gambling
                <span className="text-[#C2BF28]">Join Now</span>
              </h1>
              <Pragraph
                className={"max-w-[582px] opacity-70"}
                title={
                  "Discover the ultimate destination for online crypto gambling at Betsloty Casino. With full licensing and a commitment to 100% safety, your gaming experience is secure and exhilarating."
                }
              />
            </div>
            <div className="flex lg:gap-4 md:gap-3 gap-2">
              <button className="lg:p-[15px_40px] md:p-[10px_30px] p-[8px_25px] bg-[#C2BF28] text-sm md:text-base lg:text-lg font-medium rounded-[10px] text-[#2D2A4B] hover:text-white hover:bg-transparent border border-[#C2BF28] duration-500 ease-in-out">
                SIGN UP
              </button>
              <button className="lg:p-[15px_40px] md:p-[10px_30px] p-[8px_25px] hover:bg-[#C2BF28] text-sm md:text-base lg:text-lg font-medium rounded-[10px] hover:text-[#2D2A4B] text-white bg-transparent border border-[#C2BF28] duration-500 ease-in-out">
                LOGIN
              </button>
            </div>
          </div>
          <div
            className="bg-[url('/assets/png/bg-blue.png')] bg-no-repeat bg-contain py-[25px_30px] lg:px-[42px] md:px-[30px] px-[18px] max-w-[408px] mx-auto"
            style={{ backgroundSize: "100% 100%" }}
          >
            <div className="flex flex-col lg:gap-5 md:gap-4 gap-3">
              <div className="flex lg:gap-3 gap-1 justify-between">
                <div
                  className="border-1 border-[#C2BF28] rounded-full
              "
                >
                  <div className="border-1 border-[#9E9AB4] rounded-full m-1 md:px-5 md:py-3 py-[8px] px-[15px]  text-center">
                    <Pragraph className={"font-bold"} title={"20"} />
                    <p className="text-[7px] text-[#9E9AB4] font-normal">
                      Days
                    </p>
                  </div>
                </div>
                <div
                  className="border-1 border-[#C2BF28] rounded-full
              "
                >
                  <div className="border-1 border-[#9E9AB4] rounded-full m-1 md:px-5 md:py-3 py-[8px] px-[15px] text-center">
                    <Pragraph className={"font-bold"} title={"15"} />
                    <p className="text-[7px] text-[#9E9AB4] font-normal">
                      Hours
                    </p>
                  </div>
                </div>
                <div className="border-1 border-[#C2BF28] rounded-full">
                  <div className="border-1 border-[#9E9AB4] rounded-full m-1 md:px-5 md:py-3 py-[8px] px-[15px] text-center">
                    <Pragraph className={"font-bold"} title={"30"} />
                    <p className="text-[7px] text-[#9E9AB4] font-normal">Min</p>
                  </div>
                </div>
                <div
                  className="border-1 border-[#C2BF28] rounded-full
              "
                >
                  <div className="border-1 border-[#9E9AB4] rounded-full m-1 md:px-5 md:py-3 py-[8px] px-[15px] text-center">
                    <Pragraph className={"font-bold"} title={"15"} />
                    <p className="text-[7px] text-[#9E9AB4] font-normal">Sec</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:gap-2 gap-1">
                <div className="flex justify-between text-sm ">
                  <Pragraph
                    className={"lg:text-[13px] !text-xs max-w-[85px]"}
                    title={"Current Price $0.19"}
                  />
                  <Pragraph
                    className={"lg:!text-[13px] !text-xs max-w-[67px]"}
                    title={"Final Goal $5,000,000"}
                  />
                </div>
                {/* <div className="bg-[#2B2848] rounded-[40px] h-[14px] overflow-hidden">
                  <div className="bg-[#C2BF28] rounded-[40px] h-[14px] w-[70%]"></div>
                </div> */}
                <input
                  type="range"
                  id="vol"
                  name="vol"
                  min="0"
                  max="50"
                  className="range-slider"
                ></input>
                <div>
                  <Image
                    className="lg:w-full"
                    src={"/assets/svg/line.svg"}
                    alt="line"
                    height={2}
                    width={260}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col lg:gap-2 gap-1 text-center lg:pb-5 md:pb-3 pb-2">
                <Pragraph
                  className={
                    "xl:!text-[25px] lg:!text-[20px] !text-[16px] text-nowrap"
                  }
                  title={"$TGC IS NOW SOLD OUT!"}
                />
                <Pragraph
                  className={"lg:!text-base md:!text-sm !text-xs text-nowrap"}
                  title={"Network launch on 4th January 202 7 pm CET"}
                />
              </div>
              <div>
                <div className="w-full border border-yellow-400 rounded-md lg:px-4 px-2 lg:py-4 md:py-3 py-2 text-sm font-mono cursor-default flex justify-between">
                  <input
                    className="bg-transparent text-[#9E9AB4] focus:outline-none focus:ring-0 focus:border-none"
                    value={"0x12848d8ss8ddf.....3id8d8ssf"}
                  />
                  <CopyIcon />
                </div>
                <div className="flex flex-col lg:gap-4 md:gap-3 gap-2 lg:mt-5 md:mt-4 mt-3">
                  <div className="flex gap-2">
                    <button className="lg:p-[10px_25px] md:p-[8px_25px] p-[6px_17px] bg-[#C2BF28] text-sm md:text-base lg:text-lg font-medium rounded-[10px] text-[#2D2A4B] hover:text-white hover:bg-transparent border border-[#C2BF28] duration-500 ease-in-out text-nowrap w-full">
                      Buy on Uniswap
                    </button>
                    <button className="lg:p-[10px_25px] md:p-[8px_20px] p-[6px_15px] hover:bg-[#C2BF28] text-sm md:text-base lg:text-lg font-medium rounded-[10px] hover:text-[#2D2A4B] text-white bg-transparent border border-[#C2BF28] duration-500 ease-in-out text-nowrap w-full">
                      View chart
                    </button>
                  </div>
                  <div className="flex flex-col lg:gap-3 gap-2">
                    <button className="lg:p-[10px_55px] md:p-[8px_35px] p-[6px_25px] bg-[#C2BF28] text-sm md:text-base lg:text-lg font-medium rounded-[10px] text-[#2D2A4B] hover:text-white hover:bg-transparent border border-[#C2BF28] duration-500 ease-in-out lg:w-full">
                      Connect wallet
                    </button>
                    <div>
                      <Pragraph
                        className={
                          "lg:!text-[13px] !text-xs !text-[#9E9AB4] text-center underline max-w-[177px] mx-auto"
                        }
                        title={"Current Staking APY: 119.21%"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:py-[10px] md:py-[8px] py-[6px]">
        <div className="border-y-1 border-dashed border-amber-300 lg:py-5 md:py-4 py-3">
          <div className="max-w-[1284px] xl:px-10 lg:px-8 md:px-6 px-4 mx-auto">
            <ul className="flex gap-3 justify-between items-center overflow-scroll [scrollbar-width:none]">
              {heroData.map((item, index) => (
                <li key={index}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="lg:min-w-[159px] md:min-w-[120px] min-w-[90px]"
                    width={160}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
