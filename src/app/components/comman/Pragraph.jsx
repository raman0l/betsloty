import React from "react";

function Pragraph({ title, className }) {
  return (
    <>
      <p
        className={`text-[#FAFAFF] font-normal text-sm md:text-base lg:text-lg leading-[150%]  ${className}`}
      >
        {title}
      </p>
    </>
  );
}

export default Pragraph;
