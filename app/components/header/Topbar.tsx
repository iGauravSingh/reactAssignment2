import Image from "next/image";
import React from "react";

const Topbar = () => {
  return (
    <div className=" pt-[19px] flex items-center justify-between">
      {/* Comapny Name  */}
      <div className=" w-[210px] h-[28px]">
        <p className="font-comme font-normal text-[20px] text-[#E5DFD9] leading-custom tracking-custom ">
          TANN TRIM
        </p>
      </div>

      {/* topbar Icon  */}
      <div className=" w-[161px] h-[24px] flex justify-between items-center">
        {/* Frame 51  */}
        <Image
          src="/topbarimages/Frame51.png"
          alt="Search"
          width={24}
          height={24}
        />

        {/* Frame 52  */}
        <Image
          src="/topbarimages/Frame52.png"
          alt="user-alt"
          width={24}
          height={24}
        />
        {/* Frame 53  */}
        <Image
          src="/topbarimages/Frame53.png"
          alt="Bookmark"
          width={24}
          height={24}
        />
        {/* Frame 54  */}
        <Image
          src="/topbarimages/Frame54.png"
          alt="shoping-bag"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default Topbar;
