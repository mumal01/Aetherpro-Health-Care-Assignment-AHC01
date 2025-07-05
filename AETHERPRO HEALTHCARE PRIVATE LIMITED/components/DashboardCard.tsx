import { FC } from "react";

interface CardProps {
  title: string;
}

const DashboardCard: FC<CardProps> = ({ title }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 hover:shadow-xl transition-all cursor-pointer">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
    </div>
  );
};

export default DashboardCard;
