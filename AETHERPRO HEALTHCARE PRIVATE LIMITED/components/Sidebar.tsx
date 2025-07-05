import { FC } from "react";
import Link from "next/link";

const menu = [
  "Request Services", "Services", "Tickets", "Calendar"
];

const Sidebar: FC = () => {
  return (
    <div className="bg-primary text-white h-screen w-64 p-6 fixed">
      <h1 className="text-2xl font-bold mb-10">Hospital Admin</h1>
      <ul className="space-y-4">
        {menu.map((item, index) => (
          <li key={index}>
            <Link href="#">
              <span className="hover:text-gray-200 cursor-pointer">{item}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
