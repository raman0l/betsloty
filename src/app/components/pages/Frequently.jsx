import React from "react";
import Heading from "../comman/Heading";
import Pragraph from "../comman/Pragraph";
import Image from "next/image";
import { ferqData, roadmapData } from "../helper/Helper";

function Frequently() {
  return (
    <>
      <div className="bg-[#100F1F] xl:py-[120px_100px] lg:py-[90px_80px] md:py-[60px_50px] py-[35px]">
        <div className="max-w-[1284px] xl:px-10 lg:px-8 md:px-6 px-4 mx-auto">
          <div className="flex flex-col lg:gap-5 md:gap-4 gap-3 xl:mb-15 lg:mb-12 md:mb-8 mb-6">
            <div className="flex flex-col gap-2">
              <Heading
                className={"text-center"}
                title={"Frequently Asked Questions"}
              />
              <div>
                <Image
                  className="xl:max-w-[665px] lg:max-w-[550px]  md:max-w-[350px] max-w-[270px]  mx-auto"
                  src={"/assets/svg/line.svg"}
                  alt="line"
                  width={665}
                  height={3}
                />
              </div>
            </div>
          </div>
          <div className="!w-full space-y-3">
            {ferqData.map((ferq) => (
              <div
                key={ferq.id}
                className="border border-[#2D2B45] rounded-lg overflow-hidden"
              >
                <input type="checkbox" id={ferq.id} className="peer hidden" />
                <label
                  htmlFor={ferq.id}
                  className="flex justify-between items-center cursor-pointer bg-[#1C1A33] lg:px-6 md:px-4 px-3 lg:py-4 md:py-3 py-2 text-base font-medium peer-checked:bg-[#2D2B45]"
                >
                  <p className="text-[#FAFAFF] font-normal text-sm md:text-base lg:text-lg leading-[150%]">
                    {ferq.question}
                  </p>
                  <svg
                    className="w-4 h-4 transform transition-transform peer-checked:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="#FAFAFF"
                      d="M19 9l-7 7-7-7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </label>
                <div className="bg-[#131126] lg:px-6 md:px-4 px-3 lg:py-4 md:py-3 py-2  text-sm leading-relaxed text-gray-300 hidden peer-checked:block">
                  <p className="text-[#9E9AB4] font-normal text-sm md:text-base lg:text-lg leading-[150%]">
                    {ferq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Frequently;
