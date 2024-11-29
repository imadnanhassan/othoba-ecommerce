import { DropdownProps } from "../../../types";

const Dropdown: React.FC<DropdownProps> = ({ label, options }) => {
  return (
    <div className="flex items-center space-x-2 ">
      <label className="text-sm font-medium lg:block hidden">{label}</label>
      <select className="border rounded p-2 bg-white lg:w-40 w-36">
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
