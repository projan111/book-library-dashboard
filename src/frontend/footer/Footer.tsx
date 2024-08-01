import logo from "../../assets/lifebook.png";

const Footer = () => {
  return (
    <footer>
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between items-center py-8">
          <img src={logo} alt="Life Book" width={150} />
          <ul>
            <li>About</li>
            <li>About</li>
            <li>About</li>
          </ul>
          <ul>
            <li>Services</li>
            <li>Services</li>
            <li>Services</li>
          </ul>
          <ul>
            <li>Books</li>
            <li>Books</li>
            <li>Books</li>
            <li>Books</li>
            <li>Books</li>
          </ul>
          <ul>
            <li>Contact</li>
            <li>Contact</li>
            <li>Contact</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex items-center justify-between py-8 border-t-2 border-dashed">
          <p>&copy; Copyright 2024 | All Right Reserved</p>
          <a href="/" className="underline italic text-zinc-500 hover:not-italic">Privacy & Policy</a>
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
