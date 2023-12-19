import { ReactNode } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=" flex flex-col w-full">
      <NavBar />
      <div className="flex">
        <SideBar />
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
