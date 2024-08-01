import logo from "../../assets/lifebook.png";

const FrontNavbar = () => {
  return (
    <nav className=" border ">
      <div className="nav_container flex items-center justify-between w-11/12 mx-auto py-4">
        <div className="flex">
          <img src={logo} alt="Life Book" width={130} />
        </div>
        <ul className="flex gap-6 uppercase font-semibold text-sm">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Books</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default FrontNavbar;
