import { useState } from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const handleNavLinkClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <nav
      className={`flex flex-col gap-4 pt-4 items-start shadow-md ${
        open ? "md:w-32 w-28" : " md:w-14 w-12"
      }  duration-300 px-1 md:px-2 h-screen md:text-base text-sm bg-slate-900 justify-between text-white`}
    >
      <div className=" w-full flex flex-col gap-4">
        <button
          onClick={() => setOpen(!open)}
          className=" rounded-full hover:bg-slate-800 w-fit duration-300 p-2"
        >
          {open ? (
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
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          ) : (
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
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          )}
        </button>
        {Navlinks.map((item, i) => (
          <NavLink
            onClick={() => handleNavLinkClick(i)}
            key={i}
            to={item.link}
            className={`flex items-center gap-2 p-2 hover:bg-slate-800 rounded-md delay-75 duration-200 ${
              activeIndex === i ? "bg-slate-700" : ""
            }`}
          >
            <span>{item.icon}</span>
            <span
              className={`${
                open ? "scale-100" : "scale-0"
              } duration-300 origin-left`}
            >
              {item.name}
            </span>
          </NavLink>
        ))}
      </div>
      <button className="flex items-center hover:text-red-400 gap-2 p-2">
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
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
          />
        </svg>
        <span
          className={`${
            open ? "scale-100" : "scale-0"
          } duration-300 origin-left`}
        >
          Logout
        </span>
      </button>
    </nav>
  );
};

export default SideBar;

const Navlinks = [
  {
    link: "/",
    name: "Home",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" height="1.5em" width="1.5em">
        <path d="M12.71 2.29a1 1 0 00-1.42 0l-9 9a1 1 0 000 1.42A1 1 0 003 13h1v7a2 2 0 002 2h12a2 2 0 002-2v-7h1a1 1 0 001-1 1 1 0 00-.29-.71zM6 20v-9.59l6-6 6 6V20z" />
      </svg>
    ),
  },
  {
    link: "/sms",
    name: "Messages",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" height="1.5em" width="1.5em">
        <path d="M18 11H6V6h12m-1.5 11a1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5m-9 0A1.5 1.5 0 016 15.5 1.5 1.5 0 017.5 14 1.5 1.5 0 019 15.5 1.5 1.5 0 017.5 17M4 16c0 .88.39 1.67 1 2.22V20a1 1 0 001 1h1a1 1 0 001-1v-1h8v1a1 1 0 001 1h1a1 1 0 001-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10z" />
      </svg>
    ),
  },
];
