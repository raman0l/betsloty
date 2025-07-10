import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navData } from "../helper/Helper";
import { MenuIcon } from "../helper/Icon";

function Navbar() {
  return (
    <>
      <div className="max-w-[1284px] xl:px-10 lg:px-8 md:px-6 px-4 mx-auto">
        <div className="flex items-center gap-3 justify-between py-[20px_25px]">
          <Link href={"/"}>
            <Image
              className="xl:max-w-[162px] lg:max-w-[130px] md:max-w-[100px] max-w-[90px]"
              src={"/assets/svg/betsloty.svg"}
              alt="betsloty"
              width={162}
              height={34}
            />
          </Link>
          <div className="flex items-center xl:gap-10 justify-between gap-5 max-[875px]:hidden">
            <ul className="flex xl:gap-7 gap-5">
              {navData.map((item, index) => (
                <li
                  key={index}
                  className="text-[#9E9AB4] text-nowrap text-xs lg:text-sm xl:text-base font-normal leading-[150%] hover:underline hover:text-amber-300 duration-500 ease-in-out"
                >
                  <Link href={"/"}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <button className="rounded-[10px] lg:p-[10px_15px] md:p-[8px_12px] p-[6px_9px] bg-[#2D2A4B] text-xs lg:text-sm xl:text-base font-medium text-nowrap text-white hover:bg-[#C2BF28] hover:text-black duration-500 ease-in-out cursor-pointer">
                LOGIN
              </button>
              <button className="rounded-[10px] lg:p-[10px_15px] md:p-[8px_12px] p-[6px_9px] hover:bg-[#2D2A4B] text-xs lg:text-sm xl:text-base font-medium text-nowrap hover:text-white bg-[#C2BF28] text-black duration-500 ease-in-out cursor-pointer">
                SIGN UP
              </button>
            </div>
          </div>
          <div className="min-[875px]:hidden">
            <MenuIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
