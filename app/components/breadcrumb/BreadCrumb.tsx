import Image from "next/image";
import React from "react";

const BreadCrumb = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className=" w-[1214.67px] h-[20px] mt-8 text-[#E5DFD9] flex items-center justify-between">
        {/* breadcrumb section  */}
        <div className=" flex items-center gap-2">
          <p className=" w-[41px] h-5 font-encode-sans font-medium text-[16px] leading-custombreadcrumb tracking-custombreadcrumb">
            Bags
          </p>
          <Image
            className="object-cover"
            width={5}
            height={5}
            src="/breadcrumbimage/Ellipse.png"
            alt="Ellipes"
          />
          <p className=" w-[89px] h-5 font-encode-sans font-medium text-[16px] leading-custombreadcrumb tracking-custombreadcrumb">
            Backpacks
          </p>
        </div>

        {/* product number and vector section  */}
        <div className=" flex items-center">
          <p className="w-[100px] h-5 font-encode-sans font-medium text-[16px] leading-custombreadcrumb tracking-custombreadcrumb mr-2 ">
            13 products
          </p>
          <Image
            className=""
            src="/breadcrumbimage/vector4.png"
            width={16.67}
            height={20}
            alt="Vector 4"
          />
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
