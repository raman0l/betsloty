import Image from "next/image";
import Link from "next/link";
import React from "react";
import Pragraph from "./Pragraph";
import Heading from "./Heading";
import { FaceIcon, InstaIcon, TelgramIcon, XIcon } from "../helper/Icon";
import { FooterData } from "../helper/Helper";

function Footer() {
  return (
    <>
      <div className="bg-[#131126] pt-[30px]">
        <div className="border-y-1 border-[#9E9AB4]">
          <div className="max-w-[1284px] xl:px-10 lg:px-8 md:px-6 px-4 mx-auto">
            <div className="flex lg:py-[50px_46px] md:py-10 py-7 gap-5 justify-between max-[650px]:flex-col">
              <div className="flex flex-col xl:gap-[30px] lg:gap-6 md:gap-5 gap-4">
                <Link href={"/"}>
                  <Image
                    className="lg:max-w-[210px] md:max-w-[170px] max-w-[150px]"
                    src={"/assets/svg/betsloty.svg"}
                    alt="betsloty"
                    width={210}
                    height={45}
                  />
                </Link>
                <Pragraph
                  className={
                    "!text-[#9E9AB4] lg:!text-base md:!text-sm !text-xs max-w-[440px]"
                  }
                  title={
                    "Experience the excitement of playing online slot machines from the comfort of your own home. With our huge selection of slot games that have stunning graphics and suspens."
                  }
                />
                <div className="flex flex-col lg:gap-4 gap-3">
                  <Heading
                    className={
                      "lg:!text-[25px] md:!text-xl !text-lg font-bold mb-2"
                    }
                    title={"Join us in social media"}
                  />

                  <div className="flex lg:gap-4 gap-3">
                    <Link href={"https://www.facebook.com/"} target="blank">
                      <FaceIcon />
                    </Link>
                    <Link href={"https://x.com/?lang=en"} target="blank">
                      <XIcon />
                    </Link>
                    <Link href={"https://web.telegram.org/k/"} target="blank">
                      <TelgramIcon />
                    </Link>
                    <Link
                      href={"https://www.instagram.com/accounts/login/?hl=en"}
                      target="blank"
                    >
                      <InstaIcon />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex xl:gap-25 lg:gap-17 md:gap-10 gap-5 justify-between max-[650px]:w-full flex-wrap">
                {FooterData.map((section, index) => (
                  <div
                    key={index}
                    className="flex flex-col lg:gap-[22px] md:gap-[18px] gap-[16px]"
                  >
                    <h3
                      className={
                        "lg:!text-[25px] md:!text-xl !text-lg font-bold mb-2 text-white ff-Alegreya-Sans"
                      }
                    >
                      {section.title}
                    </h3>
                    <ul className="flex flex-col lg:gap-5 md:gap-4 gap-3">
                      {section.links.map((link, i) => (
                        <li key={i}>
                          {" "}
                          <Link
                            href={"/"}
                            className="cursor-pointer xl:text-lg lg:text-base md:text-sm text-xs font-normal leading-[150%] text-nowrap text-[#9E9AB4] hover:text-white hover:underline transition duration-500 ease-in-out"
                          >
                            {link}{" "}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Pragraph
          title={"© Betsloty 2023. All rights reserved"}
          className={
            "text-center lg:py-[25px_30px] md:py-[20px_25px] py-[15px_20px] !text-[#9E9AB4]"
          }
        />
      </div>
    </>
  );
}

export default Footer;
