"use client";
import useProduct from "@/app/hooks/useProduct";
import React from "react";
import ProductCard from "./ProductCard";

const ProductContainer = () => {
  const { data, loading, error } = useProduct();

  if (loading) {
    return (
      <div className={`flex items-center justify-center`}>
        <div
          className={`animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white`}
        ></div>
      </div>
    );
  }

  return (
    <div className=" flex justify-center">
      <div className=" grid grid-cols-1 md:grid-cols-4 mt-5 mb-10 gap-x-8 gap-y-5">
        {data?.map((item) => (
          <div key={item.id}>
            <ProductCard
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              category={item.category}
              image={item.image}
              rate={item.rating.rate}
              count={item.rating.count}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
