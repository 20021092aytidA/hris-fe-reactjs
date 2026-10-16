import React, { useEffect, useRef, useState } from "react";
import { loginUser, type LoginForm } from "../../api/user/userLogin";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  interface ErrorFormMsg {
    username: string;
    password: string;
  }
  const [loginForm, setLoginForm] = useState<LoginForm>({
    password: "",
    username: "",
  });
  const [errMsg, setErrMsg] = useState<ErrorFormMsg>({
    password: "",
    username: "",
  });
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onKeyDownUsername = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      passwordRef.current?.focus();
    }
  };

  const onKeyDownSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      handleSubmit();
    }
  };

  const validateForm = (): boolean => {
    let isValid = true;

    setErrMsg({
      password: "",
      username: "",
    });

    if (loginForm.username.length === 0) {
      isValid = false;
      setErrMsg((prev) => ({ ...prev, username: "username must be filled!" }));
    }

    if (loginForm.password.length === 0) {
      setErrMsg((prev) => ({ ...prev, password: "password must be filled!" }));
    }

    return isValid;
  };

  const handleSubmit = () => {
    const isValid = validateForm();
    console.log(isValid);
    if (isValid) {
      handleLogin();
    }
  };

  const handleLogin = async () => {
    try {
      const res = await loginUser(loginForm);
      const jsonRes = await res.json();
      if (!res.ok) {
        alert(
          `${jsonRes.status} - ${jsonRes.message}\nerror: ${jsonRes.error}`,
        );

        return;
      }

      alert("successful login!");
      navigate("/");
    } catch (error) {
      console.warn(error);

      alert(error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen min-w-screen flex flex-col justify-center items-center">
      <div className="grid grid-cols-12 gap-6 p-4">
        <div className="flex flex-col col-span-12 sm:col-span-5">
          <div className="text-6xl text-red-700">HRIS APP</div>
          <div className="text-2xl text-black text-left">Login</div>
        </div>
        <div className="bg-white rounded-sm shadow-sm shadow-gray-400 col-span-12 sm:col-span-7 p-3 space-y-2">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-left font-semibold">
              Username
            </label>
            <input
              ref={usernameRef}
              type="text"
              placeholder="Enter username"
              id="username"
              name="username"
              className="text-right p-1"
              value={loginForm.username}
              onKeyDown={onKeyDownUsername}
              onChange={handleChange}
            />
            {errMsg.username !== "" ? (
              <div className="text-sm text-red-700">{errMsg.username}</div>
            ) : null}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-left font-semibold">
              Password
            </label>
            <input
              ref={passwordRef}
              type="password"
              placeholder="Enter password"
              id="password"
              name="password"
              className="text-right p-1"
              value={loginForm.password}
              onKeyDown={onKeyDownSubmit}
              onChange={handleChange}
            />
            {errMsg.password !== "" ? (
              <div className="text-sm text-red-700">{errMsg.password}</div>
            ) : null}
          </div>
          <div className="text-center w-full">
            <button
              className="w-full bg-red-700 text-white font-semibold cursor-pointer rounded-sm shadow-sm"
              onClick={handleSubmit}
            >
              Login
            </button>
            or
            <div className="flex space-x-4">
              <Link
                to="/register"
                className="w-full bg-red-700 text-white font-semibold cursor-pointer rounded-sm shadow-sm"
              >
                Register
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
