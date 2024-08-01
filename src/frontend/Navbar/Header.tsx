import { CircleX } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [hide, setHide] = useState(false);

  const hideHeader = () => {
    // e.preventDefault()
    setHide(true);
    console.log("cross is working");
  };
  if (hide) {
    return null;
  }
  return (
    <header className="bg-green-200 py-1">
      <div className="flex items-center justify-between w-11/12 mx-auto">
        <div className="text-sm font-semibold">
          <h1 className="">
            Every book is the path of your life || Limited offer!!!
          </h1>
        </div>
        <CircleX
          size={16}
          className="text-zinc-700 hover:text-red-400 cursor-pointer"
          onClick={hideHeader}
        />
      </div>
    </header>
  );
};

export default Header;
