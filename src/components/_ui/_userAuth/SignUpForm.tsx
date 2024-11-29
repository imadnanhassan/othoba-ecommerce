import { useState } from "react";

const SignUpForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          required
          className="w-[90%] px-3 py-2 text-gray-700 border rounded-sm focus:outline-none focus:border-[#3076BC]"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700">
          Email
        </label>
        <input
          type="email"
          required
          className="w-[90%] px-3 py-2 text-gray-700 border rounded-sm focus:outline-none focus:border-[#3076BC]"
        />
      </div>

      {/* password feild */}
      <div>
        <label className="block mb-2 text-sm font-bold text-gray-700">
          Password
        </label>
        <div className="relative w-[90%] mb-4">
          <input
            type={showPassword ? "text" : "password"}
            required
            className="w-full px-3 py-2 text-gray-700 border rounded-sm focus:outline-none focus:border-[#3076BC]"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 px-3 py-2 text-gray-700"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="px-4 py-2 font-bold text-white bg-[#3076BC] rounded-sm "
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
