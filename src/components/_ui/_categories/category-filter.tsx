import { filters } from "../../../db/fakeData";
import { ColorOption } from "../../../types";
import CollapsibleSection from "./CollapsibleSection";
const CategoryFilter: React.FC = () => {
  return (
    <div className="w-64 mt-10">
      {filters.map((filter, index) => (
        <CollapsibleSection key={index} title={filter.name}>
          {filter.name === "Color" ? (
            <div className="grid grid-cols-2 gap-2">
              {(filter.options as ColorOption[]).map((option, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2 p-2 border rounded"
                >
                  <div className={`w-6 h-6 ${option.color}`}></div>
                  <span>{option.label}</span>
                </div>
              ))}
            </div>
          ) : (
            <ul className="max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pr-2">
              {filter.options.map((option, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <input
                    id={`${filter.name}-${idx}`}
                    type="checkbox"
                    className="form-checkbox  text-primary"
                  />
                  <label htmlFor={`${filter.name}-${idx}`} className="text-sm">
                    {typeof option === "string" ? option : option.label}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </CollapsibleSection>
      ))}
    </div>
  );
};

export default CategoryFilter;
