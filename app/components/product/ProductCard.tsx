import Image from "next/image";
import React from "react";
import { FaRupeeSign } from "react-icons/fa";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rate: number;
  count: number;
}

const ProductCard = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rate,
  count,
}: ProductCardProps) => {
  const twentyFiveSelector = (productTitle: string) => {
    let newtitle = "";
    for (let i = 0; i < 22; i++) {
      newtitle += productTitle[i];
    }
    return newtitle;
  };

  return (
    <div className=" relative w-[280.15px] h-[483.43px]">
      {/* Product Image container */}
      <div className=" relative w-[280.15px] h-[373.26px] rounded-tl-[6.59px] rounded-tr-[6.59px] overflow-clip bg-white">
        <Image
          className=" object-cover"
          src={image}
          width={280.15}
          height={373.26}
          alt="product-name"
        />
        <Image
          className=" absolute top-[17.08px] left-[237.44px] z-10 cursor-pointer"
          src="/product/Bookmark.png"
          alt="Bookmark"
          width={26}
          height={34}
        />
      </div>

      {/* Product Detail Container  */}
      <div className="w-[280.15px] h-[122.99px] rounded-br-[17.08px] rounded-bl-[17.08px] overflow-clip bg-[#141414] -mt-[20px]">
        {/* product name  */}
        <p className=" absolute w-[259px] h-[26px] top-[386.92px] left-[10.25px] text-[#E5DFD9] font-encode-sans font-medium text-[20.5px] text-nowrap  ">
          {title.length < 25 ? title : twentyFiveSelector(title) + "..."}
        </p>

        {/* price and discount  */}

        <div className=" absolute w-[168.36px] h-[23.92px] top-[435.6px] left-[10.25px]">
          <div className=" h-[23.92px] flex items-end gap-[4.27px]">
            <FaRupeeSign size={19.13} color="#E5DFD9" />
            <p className=" h-[23px] font-encode-sans font-bold text-[18.79px] leading-customProductPrice text-[#E5DFD9]">
              {price}
            </p>
            <p className=" w-7 h-[15px] font-encode-sans font-normal text-[11.96px] leading-customOldPrice text-[#E5DFD9] line-through">
              8999
            </p>
            <p className=" h-[15px] font-encode-sans font-medium text-[11.96px] leading-customPriceDiscount text-[#2FC14F] text-nowrap">
              (50% Off)
            </p>
          </div>
        </div>

        {/* shoping bag container  */}
        <div className=" absolute w-[35.87px] h-[43.45px] top-[428.77px] left-[237.44px] cursor-pointer">
          <div className=" relative w-full h-full">
            <Image
              className=" absolute top-0 left-0 object-cover"
              src="/product/shopping-bag.png"
              alt="shoping Bag"
              width={26.08}
              height={40.49}
            />
            <Image
              className=" absolute top-[23.05px] left-[15.95px]"
              src="/product/Ellipse27.png"
              alt="Ellipse"
              width={19.93}
              height={20.39}
            />
            <Image
              className=" absolute top-[27.95px] left-[19.29px]"
              src="/product/plus.png"
              alt="add item"
              width={11}
              height={14}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
