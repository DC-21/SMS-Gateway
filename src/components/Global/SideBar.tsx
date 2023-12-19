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
      className={`md:flex hidden flex-col gap-4 pt-4 items-start shadow-md ${
        open ? "w-[160px]" : "w-14"
      }  duration-300 px-1 md:px-2 h-screen md:text-base text-sm bg-slate-900 text-white`}
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
      <button className="flex items-center hover:text-red-400 mt-36 gap-2 p-2">
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
    link: "/dashboard",
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
          d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
        />
      </svg>
    ),
  },
  {
    link: "/subscriptions",
    name: "Subscriptions",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
        />
      </svg>
    ),
  },
];
