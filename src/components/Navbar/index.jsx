import { useState } from "react";
import { close, edspert, menu } from "../../assets/";
import { navLinks } from "../../constants";
const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img
        src={edspert}
        alt="edspert logo"
        className="w-[150px] h-[30px] items-center"
      />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className="font-vietnam font-normal cursor-pointer text-[16px] text-white mr-10"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <li>
          <button className="btn rounded-[50px] text-white bg-salmon-gradient  w-[160px] h-[44px] text-[16px] font-normal">
            Masuk/Daftar
          </button>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-vietnam font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li>
              <button className="btn rounded-[50px] text-white bg-salmon-gradient mt-2 w-[160px] h-[44px] text-[16px] font-normal">
                Masuk/Daftar
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
