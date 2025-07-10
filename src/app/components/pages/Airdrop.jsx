import React from "react";
import Pragraph from "../comman/Pragraph";
import Heading from "../comman/Heading";
import Image from "next/image";
import { AirData, airdropData } from "../helper/Helper";

function Airdrop() {
  return (
    <>
      <div
        className="bg-[#100F1F] xl:py-[110px_100px] lg:py-[80px] md:py-[50px] py-[35px] relative
"
      >
        <Image
          className="absolute right-0 top-[300px] xl:max-w-[500px]  lg:max-w-[300px] md:max-w-[250px] max-w-[150px]
"
          src={"/assets/png/srcoll.png"}
          alt="srcall"
          width={500}
          height={500}
        />

        <div className="max-w-[1284px] xl:px-10 lg:px-8 md:px-6 px-4 mx-auto z-40 relative">
          <div>
            <div className="flex flex-col lg:gap-5 md:gap-4 gap-3 xl:mb-15 lg:mb-12 md:mb-8 mb-6">
              <div className="flex flex-col gap-2">
                <Heading className={"text-center"} title={"Airdrop"} />
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
                  "To show appreciation for our early players at Betsloty, we have launched an exclusive airdrop program. This initiative rewards these pioneering members based on their wagering activities, acknowledging their loyalty and engagement from the very beginning."
                }
              />
            </div>
            <div>
              <div className="flex flex-col min-[900px]:flex-row lg:gap-6 md:gap-4 gap-3 w-full justify-between">
                {airdropData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[url('/assets/png/bg-image.png')] flex flex-col lg:gap-5 md:gap-4 gap-3 py-[30px_23px] lg:px-[40px_20px] px-[30px_20px] min-[900px]:max-w-[582px] w-full"
                    style={{ backgroundSize: "100% 100%" }}
                  >
                    <h3 className="lg:text-[25px] md:text-xl text-lg  font-bold leading-[150%] text-white ff-Alegreya-Sans">
                      {item.title}
                    </h3>

                    <ul className="flex flex-col lg:gap-[10px] md:gap-2 gap-1  text-[#9E9AB4] leading-[150%]">
                      {item.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="lg:text-lg md:text-base text-sm min-[900px]:max-w-[456px]"
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
        </div>
      </div>
    </>
  );
}

export default Airdrop;
