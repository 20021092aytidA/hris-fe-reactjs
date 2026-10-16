import { Link, useNavigate } from "react-router-dom";
import { registerUser, type RegisterForm } from "../../api/user/userRegister";
import { useState } from "react";

export default function RegisterPage() {
  const navigate = useNavigate();
  interface RegisterErrorMsg {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
  }
  const [registerForm, setRegisterForm] = useState<RegisterForm>({
    roleID: 1,
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errMsg, setErrMsg] = useState<RegisterErrorMsg>({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = (): boolean => {
    setErrMsg({
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    });

    let isValid = true;

    if (registerForm.email.length === 0) {
      isValid = false;
      setErrMsg((prev) => ({ ...prev, email: "email must be filled!" }));
    }
    if (registerForm.username.length === 0) {
      isValid = false;
      setErrMsg((prev) => ({ ...prev, username: "username must be filled!" }));
    }
    if (registerForm.password.length === 0) {
      isValid = false;
      setErrMsg((prev) => ({ ...prev, password: "password must be filled!" }));
    }
    if (registerForm.confirmPassword.length === 0) {
      isValid = false;
      setErrMsg((prev) => ({
        ...prev,
        confirmPassword: "confirmPassword must be filled!",
      }));
    }

    return isValid;
  };

  const handleSubmit = () => {
    const isValid = validateForm();
    if (isValid) {
      handleRegister();
    }
  };

  const handleRegister = async () => {
    try {
      const res = await registerUser(registerForm);
      const jsonRes = await res.json();

      if (!res.ok) {
        if (jsonRes) {
          alert(
            `${jsonRes.status} - ${jsonRes.message}\nerror: ${jsonRes.error}`,
          );
          return;
        }

        alert("register failed, try again!");
        return;
      }

      alert("register success!");
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen min-w-screen flex flex-col justify-center items-center">
      <div className="p-4 text-left">
        <div className="text-6xl text-red-700 col-span-12 sm:col-span-6">
          HRIS APP
          <span className="text-2xl text-black text-right">Register</span>
        </div>
        <div className="bg-white rounded-sm shadow-sm shadow-gray-400 p-3 space-y-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1 flex flex-col">
              <label htmlFor="username" className="text-left font-semibold">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email"
                id="email"
                name="email"
                className="text-right p-1"
                onChange={handleChange}
                value={registerForm.email}
              />
              {errMsg.email !== "" ? (
                <div className="text-sm text-red-700">{errMsg.email}</div>
              ) : null}
            </div>
            <div className="col-span-2 sm:col-span-1 flex flex-col">
              <label htmlFor="username" className="text-left font-semibold">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter username"
                id="username"
                name="username"
                className="text-right p-1"
                onChange={handleChange}
                value={registerForm.username}
              />
              {errMsg.username !== "" ? (
                <div className="text-sm text-red-700">{errMsg.username}</div>
              ) : null}
            </div>
            <div className="col-span-2 sm:col-span-1 flex flex-col">
              <label htmlFor="password" className="text-left font-semibold">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                id="password"
                name="password"
                className="text-right p-1"
                onChange={handleChange}
                value={registerForm.password}
              />
              {errMsg.password !== "" ? (
                <div className="text-sm text-red-700">{errMsg.password}</div>
              ) : null}
            </div>
            <div className="col-span-2 sm:col-span-1 flex flex-col">
              <label htmlFor="password" className="text-left font-semibold">
                Confrim Password
              </label>
              <input
                type="password"
                placeholder="Enter passowrd"
                id="confirmPassword"
                name="confirmPassword"
                className="text-right p-1"
                onChange={handleChange}
                value={registerForm.confirmPassword}
              />
              {errMsg.confirmPassword !== "" ? (
                <div className="text-sm text-red-700">
                  {errMsg.confirmPassword}
                </div>
              ) : null}
            </div>
          </div>
          <div className="text-center w-full">
            <button
              className="w-full bg-red-700 text-white font-semibold cursor-pointer rounded-sm shadow-sm"
              onClick={handleSubmit}
            >
              Register
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
                to="/forgot-password"
                className="w-full bg-red-700 text-white font-semibold cursor-pointer rounded-sm shadow-sm"
              >
                Forgot Password
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
