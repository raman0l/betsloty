import React from "react";
import Heading from "../comman/Heading";
import Image from "next/image";
import Pragraph from "../comman/Pragraph";
import { roadmapData } from "../helper/Helper";

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
          <div className="flex justify-between gap-5 max-[1000px]:flex-col">
            <div className="flex flex-col min-[1000px]:gap-30 gap-5">
              <div
                className="bg-[url('/assets/png/bg-image.png')]  bg-no-repeat xl:p-[50px_52px] lg:p-[40px] p-[30px_40px] min-[1000px]:max-w-[510px]"
                style={{ backgroundSize: "100% 100%" }}
              >
                <Heading
                  title={"Phase 1 (Completed) - January 2023"}
                  className={"lg:!text-2xl md:!text-xl !text-lg leading-[160%]"}
                />
                <div className="flex flex-col">
                  <Pragraph
                    title={"1) Creating A Business Plan ✅"}
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />
                  <Pragraph
                    title={"2) Formulating Company in Curacao ✅"}
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />{" "}
                  <Pragraph
                    title={"3) Self Funding of 1M$ ✅"}
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />{" "}
                  <Pragraph
                    title={"4) company Formulation in Cyprus ✅"}
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />
                </div>
              </div>
              <div
                className="bg-[url('/assets/png/bg-image.png')] bg-no-repeat xl:p-[50px_52px] lg:p-[40px] p-[30px_40px] min-[1000px]:max-w-[510px]"
                style={{ backgroundSize: "100% 100%" }}
              >
                <Heading
                  title={"Phase 3  (Completed) - September 2023"}
                  className={"lg:!text-2xl md:!text-xl !text-lg leading-[160%]"}
                />
                <div className="flex flex-col">
                  <Pragraph
                    title={"1) Platform Live for Public"}
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />
                  <Pragraph
                    title={"2) Massive Marketing 3)"}
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />{" "}
                  <Pragraph
                    title={"3) Reaching 100k Registrations"}
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />{" "}
                  <Pragraph
                    title={"4) Reaching 500k$ Players Deposits"}
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />
                </div>
              </div>
              <div
                className="bg-[url('/assets/png/bg-image.png')] bg-no-repeat lg:py-10 py-8 lg:px-[40px_30px] px-[30px] min-[1000px]:max-w-[510px]"
                style={{ backgroundSize: "100% 100%" }}
              >
                <Heading
                  title={"Phase 5  - January 2024 onwards"}
                  className={"lg:!text-2xl md:!text-xl !text-lg leading-[160%]"}
                />
                <div className="flex flex-col">
                  <Pragraph
                    title={
                      "1) Introducing Crypto reward Token and NFTs (not For purpose of Investment or security)"
                    }
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />
                  <Pragraph
                    title={"2) Influencers Partnership and Advisors onboarding"}
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />{" "}
                  <Pragraph
                    title={"3) Casino Staff Recruitments"}
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />{" "}
                  <Pragraph
                    title={"4)Token Initial offering"}
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />
                  <Pragraph
                    title={"5) Public offering of tokens"}
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />{" "}
                  <Pragraph
                    title={"6) Listing of token on Various exchanges 7)"}
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />{" "}
                  <Pragraph
                    title={"7) Token Airdrops"}
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />{" "}
                  <Pragraph
                    title={
                      "8) Reaching 5m$ in Deposits 9) Inhouse Payment Processor"
                    }
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col min-[1000px]:gap-40 justify-end min-[1000px]:mt-25 gap-5">
              <div
                className="bg-[url('/assets/png/bg-image-1.png')] bg-no-repeat p-[38px_13px_37px_60px] lg:py-10 py-8 xl:px-[60px_32px] lg:px-[45px_10px] px-[30px_15px] min-[1000px]:max-w-[510px] max-[1000px]:order-2"
                style={{ backgroundSize: "100% 100%" }}
              >
                <Heading
                  title={"Phase 2 (Completed) - August 2023"}
                  className={"lg:!text-2xl md:!text-xl !text-lg leading-[160%]"}
                />
                <div className="flex flex-col">
                  <Pragraph
                    title={" 1) Platform Development ✅"}
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />
                  <Pragraph
                    title={"2) Sportsbook Integration ✅"}
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />{" "}
                  <Pragraph
                    title={"3) Affiliate Platform development"}
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />{" "}
                  <Pragraph
                    title={"4) Casino Blog and News Platform Development ✅"}
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />
                  <Pragraph
                    title={"5) Obtaining Curacao License ✅"}
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />
                </div>
              </div>
              <div
                className="bg-[url('/assets/png/bg-image.png')] bg-no-repeat xl:px-[40px] lg:px-[30px_15px] px-[30px_10px] py-[30px_40px] min-[1000px]:max-w-[510px]"
                style={{ backgroundSize: "100% 100%" }}
              >
                <Heading
                  title={"Phase 4 - October 2023 Onwards"}
                  className={"lg:!text-2xl md:!text-xl !text-lg leading-[160%]"}
                />
                <div className="flex flex-col">
                  <Pragraph
                    title={
                      "1) Expanding to various Global markets as such Asian markets ,European markets , Latam)"
                    }
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />
                  <Pragraph
                    title={"2) Token Airdrops"}
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />{" "}
                  <Pragraph
                    title={"3) Reaching 2M+ Registrations"}
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />{" "}
                  <Pragraph
                    title={"4) Reaching 10m$ Players Deposits"}
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />
                  <Pragraph
                    title={
                      "5) VIP Events for Higher Loyalty level casino Players"
                    }
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />
                </div>
              </div>
              <div
                className="bg-[url('/assets/png/bg-image.png')] bg-no-repeat xl:px-[40px] lg:px-[30px_15px] px-[30px_10px] py-[30px_40px] min-[1000px]:max-w-[510px]"
                style={{ backgroundSize: "100% 100%" }}
              >
                <Heading
                  title={"Phase 6 - June 2024 Onwards"}
                  className={"lg:!text-2xl md:!text-xl !text-lg leading-[160%]"}
                />
                <div className="flex flex-col">
                  <Pragraph
                    title={
                      "1) Introducing in house games based on utility token"
                    }
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />
                  <Pragraph
                    title={"2) inbuilt Crypto Futures and Crypto Dex"}
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />{" "}
                  <Pragraph
                    title={"3) Token Burn mechanism to increase value of token"}
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />{" "}
                  <Pragraph
                    title={"4) Reaching 100M$ Players Deposits"}
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />
                  <Pragraph
                    title={
                      "5) Generating 2M$+ Daily GGR (revenue without expenses)"
                    }
                    className={"leading-[160%] !text-[#9E9AB4]"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Roadmap;
