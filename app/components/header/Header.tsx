import Navbar from "./Navbar";
import Topbar from "./Topbar";

const Header = () => {
  return (
    <div className=" w-[1280px] h-[105px] ml-14 bg-[#0C0C0C] ">
      <Topbar />
      <Navbar />
    </div>
  );
};

export default Header;
