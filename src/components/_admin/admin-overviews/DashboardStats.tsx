import React from "react";

type StatCardProps = {
  title: string;
  value: string | number;
  change: string;
  increase: boolean;
  bgClass: string;
};

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  increase,
  bgClass,
}) => {
  return (
    <div
      className={`py-8 px-6 rounded-lg flex flex-col justify-center ${bgClass} shadow-lg`}
    >
      <h3 className="text-sm font-semibold text-white dark:text-white">
        {title}
      </h3>
      <div className="lg:flex gap-4 py-2 items-center justify-between">
        <p className="text-3xl font-bold dark:text-white text-white">{value}</p>
        <div className="flex items-center space-x-1 mt-2 lg:bg-white p-1 rounded">
          <span
            className={`text-sm font-medium  ${
              increase ? "text-green-600" : "text-red-400"
            }`}
          >
            {change}
          </span>
          <span className="text-sm text-gray-400">{increase ? "↑" : "↓"}</span>
        </div>
      </div>
    </div>
  );
};

const DashboardStats: React.FC = () => {
  const bgClasses = [
    "bg-uxBgPurpole dark:bg-[#1A1B1E]",
    "bg-uxBgGreen dark:bg-[#2C2F33]",
    "bg-uxBgYellow dark:bg-[#1E2023]",
    "bg-uxBgPink dark:bg-[#292933]",
  ];

  // Fake data for the stats
  const statsData = [
    { title: "Customers", value: "3,781", change: "+11.01%", increase: true },
    { title: "Orders", value: "1,219", change: "-0.03%", increase: false },
    { title: "Revenue", value: "$695", change: "+15.03%", increase: true },
    { title: "Conversion", value: "30.1%", change: "+6.08%", increase: true },
  ];

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6">
        {statsData.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            increase={stat.increase}
            bgClass={bgClasses[index]}
          />
        ))}
      </div>

     
    </>
  );
};

export default DashboardStats;
