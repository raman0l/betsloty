import React from "react";
import Heading from "../comman/Heading";
import Pragraph from "../comman/Pragraph";
import Image from "next/image";

function Vision() {
  return (
    <>
      <div
        className="bg-[linear-gradient(180deg,#19172F_0%,rgba(19,17,38,0.00)_S100%)
] xl:py-30 lg:py-20 md:py-15 py-10"
      >
        <div className="max-w-[1284px] xl:px-10 lg:px-8 md:px-6 px-4 mx-auto">
          <div className="flex flex-col lg:gap-5 md:gap-4 gap-3 xl:mb-15 lg:mb-12 md:mb-8 mb-6">
            <div className="flex flex-col gap-2">
              <Heading
                className={"text-center"}
                title={"Vision, Mission & Focus"}
              />
              <div>
                <Image
                  className="xl:max-w-[600px] lg:max-w-[450px]  md:max-w-[350px] max-w-[250px]  mx-auto"
                  src={"/assets/svg/line.svg"}
                  alt="line"
                  width={600}
                  height={3}
                />
              </div>
            </div>

            <Pragraph
              className={"!text-[#9E9AB4] max-w-[831px] text-center mx-auto"}
              title={
                "We aspire to create a trusted and entertaining ecosystem where players from around the world can enjoy a diverse range of crypto-based casino games while reaping the benefits of blockchain technology"
              }
            />
          </div>
          <div className="flex bg-[#2B2848] rounded-sm lg:max-w-[370px] md:max-w-[320px] max-w-[270px] justify-between w-full">
            <button className="lg:text-base md:text-sm text-xs font-medium lg:p-[11px_25px] md:p-[9px_20px]  p-[7px_17px] rounded-[5px] bg-[#C2BF28]  hover:text-[#9E9AB4] text-[#2D2A4B] hover:bg-transparent duration-500 ease-in-out">
              Our Vision
            </button>
            <button className="lg:text-base md:text-sm text-xs font-medium lg:p-[11px_25px] md:p-[9px_20px]  p-[7px_17px] rounded-[5px] hover:not-only-of-type:bg-[#C2BF28] hover:text-[#2D2A4B]  text-[#9E9AB4] bg-transparent duration-500 ease-in-out">
              Mission
            </button>
            <button className="lg:text-base md:text-sm text-xs font-medium lg:p-[11px_25px] md:p-[9px_20px]  p-[7px_17px] rounded-[5px] hover:bg-[#C2BF28] hover:text-[#2D2A4B] text-[#9E9AB4] bg-transparent duration-500 ease-in-out">
              Our Focus
            </button>
          </div>
          <div className="flex gap-5 justify-between max-[700px]:flex-wrap-reverse lg:mt-[30px] md:mt-[25px] mt-[20px]">
            <div className="flex flex-col xl:gap-[30px] lg:gap-6 md:gap-4 gap-3 lg:mt-[90px] min-[700]:mt-[50px]">
              <div
                className="flex
             flex-col lg:gap-2 gap-1"
              >
                <Heading
                  title={"Our Vision"}
                  className={
                    "lg:!text-[31px] md:!text-2xl !text-xl font-bold leading-[130%]"
                  }
                />
                <div>
                  <Image
                    src={"/assets/svg/line.svg"}
                    alt="line"
                    width={175}
                    height={5}
                  />
                </div>
              </div>
              <div className="flex flex-col lg:gap-[14px] md:gap-[10px] gap-[7px]">
                <Pragraph
                  className={
                    "!text-[#9E9AB4] leading-[160%] min-[700px]:max-w-[480px]"
                  }
                  title={
                    "Our vision is to become the premier online crypto casino platform, setting the industry standard for innovation, security, and user experience."
                  }
                />
                <Pragraph
                  className={
                    "!text-[#9E9AB4] leading-[160%] min-[700px]:max-w-[480px]"
                  }
                  title={
                    "We aspire to create a trusted and entertaining ecosystem where players from around the world can enjoy a diverse range of crypto-based casino games while reaping the benefits of blockchain technology"
                  }
                />
              </div>
            </div>
            <div className="mx-auto">
              <Image
                className="xl:max-w-[462px] lg:max-w-[400px] md:max-w-[350px] max-w-[300px] mx-auto"
                src={"/assets/svg/begm.svg"}
                alt="begm"
                width={462}
                height={482}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vision;
