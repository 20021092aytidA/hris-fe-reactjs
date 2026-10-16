import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
  return (
    <div className="bg-gray-100 min-h-screen min-w-screen flex flex-col justify-center items-center">
      <div className="grid grid-cols-12 gap-6 p-4">
        <div className="flex flex-col col-span-12 sm:col-span-5 space-y-6">
          <div className="text-6xl text-red-700">HRIS APP</div>
          <div className="text-2xl text-black text-left">Forgot Password</div>
        </div>
        <div className="bg-white rounded-sm shadow-sm shadow-gray-400 col-span-12 sm:col-span-7 p-3 space-y-2">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-left font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              id="email"
              name="email"
              className="text-right p-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-left font-semibold">
              Confirm Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              id="confirmEmail"
              name="confirmEmail"
              className="text-right p-1"
            />
          </div>
          <div className="text-center w-full">
            <button className="w-full bg-red-700 text-white font-semibold cursor-pointer rounded-sm shadow-sm">
              Forgot Password
            </button>
            or
            <div className="flex space-x-4">
              <Link
                to="/login"
                className="w-full bg-red-700 text-white font-semibold cursor-pointer rounded-sm shadow-sm"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="w-full bg-red-700 text-white font-semibold cursor-pointer rounded-sm shadow-sm"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
