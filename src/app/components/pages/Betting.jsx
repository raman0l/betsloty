"use client";
import React from "react";
import Heading from "../comman/Heading";
import Image from "next/image";

import { swiperpData } from "../helper/Helper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Betting() {
  return (
    <>
      <div className="bg-[linear-gradient(180deg,#4820BA 0%,#19172F_100%)] bg-darkIndigo xl:py-25 lg:py-20 md:py-15 py-10">
        <div className="max-w-[1284px] xl:px-10 lg:px-8 md:px-6 px-4 mx-auto">
          <div className="flex flex-col lg:gap-5 md:gap-4 gap-3 xl:mb-15 lg:mb-12 md:mb-8 mb-6">
            <div className="flex flex-col gap-2">
              <Heading
                className={"text-center"}
                title={"Betting and Social Sharing"}
              />
              <div>
                <Image
                  className="xl:max-w-[264x] lg:max-w-[240px]  md:max-w-[200px] max-w-[180px]  mx-auto"
                  src={"/assets/svg/line.svg"}
                  alt="line"
                  width={264}
                  height={3}
                />
              </div>
            </div>
          </div>

          <Swiper
            className="w-full"
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            autoplay={{ delay: 3000 }}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              400: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              600: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              800: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1100: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            {swiperpData.map((item, index) => (
              <SwiperSlide>
                <Image
                  className="w-full"
                  src={item.image}
                  width={250}
                  height={438}
                  alt={"img"}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Betting;
