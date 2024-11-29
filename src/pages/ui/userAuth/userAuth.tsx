import { useState } from "react";
import SignInForm from "../../../components/_ui/_userAuth/SignInForm";
import SignUpForm from "../../../components/_ui/_userAuth/SignUpForm";


export const UserAuth: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <>
      {isModalOpen && (
        <div className=" text-white flex items-center justify-center">
          <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 h-auto  bg-white bg-opacity-95 rounded-sm shadow-lg  md:p-8 w-full max-w-lg">
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-[#3076BC] text-sm hover:text-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#5f6368"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </button>
            </div>
            <div className="p-6 md:p-0">
              <div className="flex justify-end ">
                {/* <button >close</button> */}
              </div>
              <div className="flex  justify-center mb-4 w-full">
                <button
                  className={`px-4 py-2 text-gray-700 text-xl font-semibold ${
                    isSignIn
                      ? "text-[#3076BC] border-b-[2px] border-b-[#3076BC]"
                      : "border-b-[2px]"
                  } rounded-tl-lg rounded-bl-lg`}
                  onClick={() => setIsSignIn(true)}
                >
                  Sign In
                </button>
                <button
                  className={`px-4 py-2 text-gray-700 text-xl font-semibold ${
                    !isSignIn
                      ? "text-[#3076BC] border-b-[2px] border-b-[#3076BC]"
                      : "border-b-[2px]"
                  } rounded-tr-lg rounded-br-lg`}
                  onClick={() => setIsSignIn(false)}
                >
                  Sign Up
                </button>
              </div>

              {isSignIn ? <SignInForm /> : <SignUpForm />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};


