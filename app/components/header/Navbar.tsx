import React from "react";

const navLinkArray = ["Bags", "Travel", "Accesories", "Gifting", "Jewelery"];

const Navbar = () => {
  return (
    <div className=" w-full flex justify-center items-center mt-[24px]">
      <div className=" w-[472px] h-[18px] flex justify-between text-[#E5DFD9]">
        {navLinkArray.map((item, index) => (
          <div key={index}>
            <p className=" text-[14px] leading-customnav tracking-customnav font-encode-sans">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
