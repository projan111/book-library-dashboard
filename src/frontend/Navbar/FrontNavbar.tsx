import { BellRing, ShoppingCart, UserRound } from "lucide-react";
import logo from "../../assets/lifebook.png";
import { Link } from "react-router-dom";

const FrontNavbar = () => {
  return (
    <nav className="sticky top-0 bg-[#ffffffb6] backdrop-blur-xl border-b ">
      <div className="nav_container flex items-center justify-between w-11/12 mx-auto py-3">
        <div className="flex">
          <img src={logo} alt="Life Book" width={130} />
        </div>
        <ul className="flex items-center gap-6 uppercase font-semibold text-sm">
          <Link
            to={"/"}
            className="text-green-500 scale-125 transition-all duration-100 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="hover:text-green-500 hover:scale-125 transition-all duration-100 cursor-pointer"
          >
            About
          </Link>
          <Link
            to={"/services"}
            className="hover:text-green-500 hover:scale-125 transition-all duration-100 cursor-pointer"
          >
            Services
          </Link>
          <Link
            to={"/books"}
            className="hover:text-green-500 hover:scale-125 transition-all duration-100 cursor-pointer"
          >
            Books
          </Link>
          <Link
            to={"/contact"}
            className="hover:text-green-500 hover:scale-125 transition-all duration-100 cursor-pointer"
          >
            Contact
          </Link>
        </ul>
        <div className="flex items-center gap-3">
          <BellRing
            size={20}
            className=" text-zinc-600 hover:text-green-500 cursor-pointer"
          />
          <ShoppingCart
            size={20}
            className=" text-zinc-600 hover:text-green-500 cursor-pointer"
          />
          <UserRound
            size={32}
            className=" text-zinc-600 hover:text-green-500 cursor-pointer bg-green-100 border rounded-full p-1"
          />
        </div>
      </div>
    </nav>
  );
};

export default FrontNavbar;
