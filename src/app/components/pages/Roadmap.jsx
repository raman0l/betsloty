import React from "react";
import Heading from "../comman/Heading";
import Image from "next/image";
import Pragraph from "../comman/Pragraph";
import { phasesData, roadmapData } from "../helper/Helper";

function Roadmap() {
  return (
    <>
      <div className="max-w-[1284px] xl:px-10 lg:px-8 md:px-6 px-4 mx-auto">
        <div className="flex flex-col lg:gap-[75px] md:gap-[50px] gap-[40px]">
          <div className="flex flex-col gap-2">
            <Heading className={"text-center"} title={"Roadmap"} />
            <div>
              <Image
                className="xl:max-w-[264px] lg:max-w-[240px]  md:max-w-[210px] max-w-[180px]  mx-auto"
                src={"/assets/svg/line.svg"}
                alt="line"
                width={264}
                height={3}
              />
            </div>
          </div>
          <div className="relative">
            {/* Center vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1 w-1 bg-[#4C496D] h-[100%] z-0 max-[900px]:hidden" />

            <div className="xl:space-y-20 lg:space-y-15 md:space-y-10 space-y-5 relative z-10">
              {phasesData.map((phase, idx) => {
                const isLeft = idx % 2 === 0;

                return (
                  <div
                    key={idx}
                    className="flex items-center relative max-[900px]:flex-col-reverse w-full"
                  >
                    {/* Left Box */}
                    <div className="w-[50%] xl:pr-10 lg:pr-6 max-[900px]:w-full z-10">
                      {isLeft && (
                        <div
                          className="bg-[url('/assets/png/bg-image.png')] relative min-[900px]:max-w-[510px]  bg-[#1C1A33] z-20 text-white lg:py-[40px] md:py-[30px] py-[25px] lg:px-[40px_30px] md:px-[30px_20px] px-[25px_10px] flex flex-col gap-2"
                          style={{ backgroundSize: "100% 100%" }}
                        >
                          <h3 className="lg:text-[25px] md:text-xl text-lg  font-bold leading-[150%] text-white ff-Alegreya-Sans">
                            {phase.title}
                          </h3>
                          <ul className="text-sm space-y-1">
                            {phase.points.map((pt, i) => (
                              <li
                                key={i}
                                className="text-[#9E9AB4] lg:text-lg md:text-base text-sm leading-[160%] font-normal"
                              >
                                {pt}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Dot + connector */}
                    <div className="relative w-15 flex justify-center items-center">
                      {isLeft ? (
                        <div className="absolute w-30 h-1 bg-[#4C496D] right-6 max-[900px]:hidden" />
                      ) : (
                        <div className="absolute left-6 w-30 h-1 bg-[#4C496D] max-[900px]:hidden" />
                      )}
                      <div className="xl:w-10 lg:w-8 md:w-6 w-4 xl:h-10 lg:h-8 md:h-6 h-4 bg-[#4C496D] rounded-full border-[3px] !border-[#4C496D] z-10 max-[900px]:hidden" />
                    </div>

                    {/* Right Box */}
                    <div className="w-[50%] xl:pl-10 lg:pl-6 max-[900px]:w-full">
                      {!isLeft && (
                        <div
                          className="bg-[url('/assets/png/bg-image.png')] bg-no-repeat relative min-[900px]:max-w-[510px] ml-auto bg-[#1C1A33] z-20 lg:py-[40px] md:py-[30px] py-[25px] lg:px-[35px] md:px-[30px_20px] px-[25px_10px] flex flex-col gap-2"
                          style={{ backgroundSize: "100% 100%" }}
                        >
                          <h3 className="lg:text-[25px] md:text-xl text-lg  font-bold leading-[150%] text-white ff-Alegreya-Sans">
                            {phase.title}
                          </h3>
                          <ul className="text-sm space-y-1">
                            {phase.points.map((pt, i) => (
                              <li
                                key={i}
                                className="text-[#9E9AB4] lg:text-lg md:text-base text-sm leading-[160%] font-normal"
                              >
                                {pt}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Roadmap;
