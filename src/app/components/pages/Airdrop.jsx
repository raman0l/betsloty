import React from "react";
import Pragraph from "../comman/Pragraph";
import Heading from "../comman/Heading";
import Image from "next/image";
import { AirData, airdropData, airenData } from "../helper/Helper";

function Airdrop() {
  return (
    <>
      <div className="max-w-[1284px] xl:px-10 lg:px-8 md:px-6 px-4 mx-auto">
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
            <div
              className="bg-[url('/assets/png/bg-image.png')] bg-no-repeat py-[30px_23px] px-10 max-w-[582px]"
              style={{ backgroundSize: "100% 100%" }}
            >
              {AirData.map((Air) => (
                <div key={Air.id}>
                  <Heading
                    Heading={Air.title}
                    className={
                      "lg:!text-2xl md:!text-xl !text-lg font-bold leading-[160%]"
                    }
                  />
                  {Air.point.map((point, index) => (
                    <div>
                      <Pragraph
                        paragraph={point}
                        className={"max-w-[456px] !text-[#9E9AB4]"}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div
              className="bg-[url('/assets/png/bg-image.png')] bg-no-repeat py-[30px_23px] px-10 max-w-[582px]"
              style={{ backgroundSize: "100% 100%" }}
            >
              <Heading
                title={"Genesis players"}
                className={
                  "lg:!text-2xl md:!text-xl !text-lg font-bold leading-[160%]"
                }
              />
              <Pragraph
                className={"max-w-[456px] !text-[#9E9AB4]"}
                title={
                  "1 Million tokens will be airdropped to all users who have wagered in the casino based on wagering volume ."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Airdrop;
