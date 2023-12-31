import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navlinks } from "./SideBar";

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const handleNavLinkClick = (index: number) => {
    setActiveIndex(index);
    setOpen(false);
  };
  return (
    <nav className="flex items-center w-full justify-between gap-8 py-4 shadow-md px-4 relative">
      <Link to={"/"} className=" font-bold flex items-center gap-2">
        SMS
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      </Link>
      <div className=" flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>

        <button onClick={() => setOpen(!open)} className="flex flex-col gap-2">
          <div
            className={`w-6 rounded-full h-1 ${
              open ? "rotate-45 translate-y-[0.38rem]" : ""
            } bg-slate-900 duration-300 delay-200`}
          ></div>
          <div
            className={`w-6 rounded-full h-1 ${
              open ? "-rotate-45 -translate-y-[0.38rem]" : ""
            } bg-slate-900 duration-300 delay-200`}
          ></div>
        </button>
      </div>
      <nav
        className={`md:hidden absolute ${
          open ? "left-0" : "-left-full"
        } w-full flex top-[100%] inset-x-0 h-screen duration-300`}
      >
        <div className="bg-slate-900 text-white w-2/3 shadow-lg">
          <div className=" my-8  gap-2 flex flex-col">
            {Navlinks.map((item, i) => (
              <NavLink
                onClick={() => handleNavLinkClick(i)}
                key={i}
                to={item.link}
                className={`flex items-center gap-2 p-2 hover:bg-slate-800 rounded-md mx-2 delay-75 duration-200 ${
                  activeIndex === i ? "bg-slate-700" : ""
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
        <button
          onClick={() => setOpen(false)}
          className=" flex-1 backdrop-blur-[2px]"
        ></button>
      </nav>
    </nav>
  );
};

export default NavBar;
