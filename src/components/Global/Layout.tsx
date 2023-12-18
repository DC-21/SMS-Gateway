import { ReactNode } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=" flex flex-col">
      <NavBar />
      <div className="flex">
        <SideBar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
