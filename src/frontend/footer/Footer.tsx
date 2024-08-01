import logo from "../../assets/lifebook.png";

const Footer = () => {
  return (
    <footer>
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between items-start py-8 border-t-2 border-dashed">
          <div className="w-full flex flex-col items-start ">
            <img src={logo} alt="Life Book" width={150} />
            <p className="mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem velit veniam numquam ducimus quisquam at quo.
            </p>
          </div>
          <div className="w-full flex flex-col items-end">
            <h2 className="text-xl font-medium">About Us</h2>
            <ul className="flex flex-col items-end">
              <li className="hover:text-green-500 hover:scale-125 transition-all duration-100 cursor-pointer">About Company</li>
              <li className="hover:text-green-500 hover:scale-125 transition-all duration-100 cursor-pointer">Our Team</li>
              <li className="hover:text-green-500 hover:scale-125 transition-all duration-100 cursor-pointer">Authors</li>
            </ul>
          </div>
          <div className="w-full flex flex-col items-end">
            <h2 className="text-xl font-medium">Our Services</h2>
            <ul className="flex flex-col items-end">
              <li className="hover:text-green-500 hover:scale-125 transition-all duration-100 cursor-pointer">
                Book Reading
              </li>
              <li className="hover:text-green-500 hover:scale-125 transition-all duration-100 cursor-pointer">
                Profile Management
              </li>
              <li className="hover:text-green-500 hover:scale-125 transition-all duration-100 cursor-pointer">
                Personilize Book
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col items-end">
            <h2 className="text-xl font-medium">Genre</h2>
            <ul className="flex flex-col items-end">
              <li className="hover:text-green-500 hover:scale-125 transition-all duration-100 cursor-pointer">
                Fiction
              </li>
              <li className="hover:text-green-500 hover:scale-125 transition-all duration-100 cursor-pointer">
                Non-Fiction
              </li>
              <li className="hover:text-green-500 hover:scale-125 transition-all duration-100 cursor-pointer">
                Poetry
              </li>
              <li className="hover:text-green-500 hover:scale-125 transition-all duration-100 cursor-pointer">
                Drama
              </li>
              <li className="hover:text-green-500 hover:scale-125 transition-all duration-100 cursor-pointer">
                Cooking
              </li>
              <li className="hover:text-green-500 hover:scale-125 transition-all duration-100 cursor-pointer">
                Science
              </li>
              <li className="hover:text-green-500 hover:scale-125 transition-all duration-100 cursor-pointer">
                History
              </li>
              <li className="hover:text-green-500 hover:scale-125 transition-all duration-100 cursor-pointer">
                Philosophy
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col items-end">
            <h2 className="text-xl font-medium">Connect With Us</h2>
            <ul className="flex flex-col items-end ">
              <li className="hover:text-green-500 hover:scale-125 transition-all duration-100 cursor-pointer">
                Facebook
              </li>
              <li className="hover:text-green-500 hover:scale-125 transition-all duration-100 cursor-pointer">
                Instagram
              </li>
              <li className="hover:text-green-500 hover:scale-125 transition-all duration-100 cursor-pointer">
                Linkedin
              </li>
              <li className="hover:text-green-500 hover:scale-125 transition-all duration-100 cursor-pointer">
                Youtube
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between py-8 border-t-2 border-dashed">
          <p>&copy; Copyright 2024 | All Right Reserved</p>
          <a
            href="/"
            className="underline italic text-zinc-500 hover:not-italic"
          >
            Privacy & Policy
          </a>
          <p className="text-zinc-500">
            {" "}
            Design and Developed By:{" "}
            <a
              href="https://webxnep.com"
              target="__blank"
              className="text-zinc-900 hover:underline"
            >
              WebX
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
