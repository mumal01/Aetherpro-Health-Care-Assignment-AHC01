import { FC } from "react";

const Topbar: FC = () => {
  return (
    <div className="bg-white shadow-md py-4 px-6 fixed top-0 left-64 right-0 z-10">
      <h2 className="text-xl font-semibold">Dashboard</h2>
    </div>
  );
};

export default Topbar;
