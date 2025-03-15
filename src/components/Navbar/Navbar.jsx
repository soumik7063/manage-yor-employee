import React, { useEffect, useState } from "react";
import { UseDark } from "../../context/DarkToggle";

const Navbar = () => {
  const { theme, Darkmode, Lightmode } = UseDark();

  const [isDarkmode , setisDarkmode] = useState(true);
  const togglebtn = (e) => {
    if (isDarkmode) {
      Darkmode();
      setisDarkmode((prev) => !prev);
    } else {
      Lightmode();
      setisDarkmode((prev) => !prev);
    }
  };

  return (
    <>
      {/* <input
        type="checkbox"
        onChange={togglebtn}
        checked={theme === 'dark'}
        className="rounded-md px-3"
      /> */}
      <a 
      className="absolute left-2 bg-white dark:bg-gray-800 px-3 py-2 rounded-md"
       href=""><img className="h-12" src="/logo.png" alt="" /></a>
      <button
      className="absolute right-2 bg-black text-white dark:bg-white dark:text-black px-3 py-2 rounded-md"
      onClick={togglebtn}>{isDarkmode? <img className="h-7 w-7 transition-all duration-500 ease-in-out" src="/moon.png" alt="" />: <img className="w-7 h-7 transition-all duration-500 ease-in-out" src="/sun.jpg" alt="" /> }</button>
    </>
  );
};

export default Navbar;
