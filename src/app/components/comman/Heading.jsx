import React from "react";

function Heading({ title, className }) {
  return (
    <h2
      className={`text-[#D7D9DD] font-bold text-xl md:text-2xl lg:text-3xl xl:text-[39px] ff-Alegreya-Sans ${className}`}
    >
      {title}
    </h2>
  );
}

export default Heading;
