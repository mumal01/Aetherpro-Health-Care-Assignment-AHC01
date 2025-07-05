import { FC, ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Topbar />
        <main className="mt-20 p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
