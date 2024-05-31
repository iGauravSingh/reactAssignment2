"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const menuArray = [
  { id: 1, image: "/menuicons/Frame1.png", title: "All Bags" },
  { id: 2, image: "/menuicons/Frame2.png", title: "Vanity Pouch" },
  { id: 3, image: "/menuicons/Frame3.png", title: "Tote Bag" },
  { id: 4, image: "/menuicons/Frame4.png", title: "Duffle Bag" },
  { id: 5, image: "/menuicons/Frame5.png", title: "Laptop Sleeve" },
  { id: 6, image: "/menuicons/Frame6.png", title: "Messenger Bags" },
  { id: 7, image: "/menuicons/Frame7.png", title: "Sling Bgs" },
  { id: 8, image: "/menuicons/Frame8.png", title: "Handbags" },
  // {id: 9, image: "/menuicons/Frame9.png", title: "Buckle Bag"},
  { id: 10, image: "/menuicons/Frame1.png", title: "All Bags" },
  { id: 11, image: "/menuicons/Frame2.png", title: "Vanity Pouch" },
  { id: 12, image: "/menuicons/Frame3.png", title: "Tote Bag" },
];

const Menu = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const ref = useRef<HTMLDivElement>(null);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    setIsDragging(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging || !ref.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 2;
    ref.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener("mousemove", onMouseMove);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("mousemove", onMouseMove);
      }
    };
  }, [onMouseMove]);

  return (
    <div className=" w-[1303px] h-[130px] ml-8 mt-[3rem] overflow-clip">
      <div
        ref={ref}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        className=" h-full flex overflow-auto cursor-grab select-none no-scrollbar"
        style={{ userSelect: "none" }}
      >
        <div className=" h-full flex flex-nowrap gap-14 ">
          {menuArray.map((item) => (
            <div
              key={item.id}
              className="flex-none snap-center touch-pan-x cursor-pointer"
            >
              <div className=" h-full flex flex-col items-center justify-between">
                <Image
                  className=" object-cover"
                  src={item.image}
                  alt={item.title}
                  width={96}
                  height={96}
                />
                <p className=" font-encode-sans font-normal text-[13px] text-[#E5DFD9] leading-custommenu tracking-custommenu pb-1">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
