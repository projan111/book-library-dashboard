import { CircleUserRound } from "lucide-react";
import logo from "../../assets/lifebook.png";

const FrontNavbar = () => {
  return (
    <nav className="sticky top-0 bg-[#ffffffb6] backdrop-blur-xl border-b ">
      <div className="nav_container flex items-center justify-between w-11/12 mx-auto py-3">
        <div className="flex">
          <img src={logo} alt="Life Book" width={130} />
        </div>
        <ul className="flex items-center gap-6 uppercase font-semibold text-sm">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Books</li>
          <li>Contact</li>
          <CircleUserRound color="#777" />
        </ul>
      </div>
    </nav>
  );
};

export default FrontNavbar;
