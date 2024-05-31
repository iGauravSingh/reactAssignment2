import Image from "next/image";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import BreadCrumb from "./components/breadcrumb/BreadCrumb";
import ProductCard from "./components/product/ProductCard";
import ProductContainer from "./components/product/ProductContainer";

export default function Home() {
  return (
    <div className=" w-screen bg-[#0C0C0C] min-h-screen ">
      <Header />
      <Menu />
      <BreadCrumb />
      <ProductContainer />
    </div>
  );
}
