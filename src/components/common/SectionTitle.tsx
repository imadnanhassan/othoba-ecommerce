interface SectionTitlePropos {
  leftText: string;
  rightText: string;
}

const SectionTitle: React.FC<SectionTitlePropos> = ({
  leftText,
  rightText,
}) => {
  return (
    <div className="flex justify-between items-center py-4">
      <h2 className="text-xl font-bold text-left">{leftText}</h2>
      <p className="text-md text-right hover:text-blue-500 cursor-pointer flex items-center ">
        {rightText}{" "}
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </p>
    </div>
  );
};

export default SectionTitle;
