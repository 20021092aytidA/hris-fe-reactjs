import React, {
  useEffect,
  useRef,
  useState,
  type KeyboardEventHandler,
} from "react";

export default function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const onKeyDownUsername = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      passwordRef.current?.focus();
    }
  };

  const onKeyDownSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      // LOGIN
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen min-w-screen flex flex-col justify-center items-center">
      <div className="grid grid-cols-12 p-4">
        <div className="text-6xl text-red-700 col-span-12 sm:col-span-6">
          HRIS APP <span className="text-2xl text-black text-right">Login</span>
        </div>
        <div className="bg-white rounded-sm shadow-sm shadow-gray-400 col-span-12 sm:col-span-6 p-3 space-y-2">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-right font-semibold">
              Username
            </label>
            <input
              ref={usernameRef}
              type="text"
              placeholder="Enter username"
              id="username"
              className="text-right p-1"
              value={username ?? ""}
              onKeyDown={onKeyDownUsername}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-right font-semibold">
              Password
            </label>
            <input
              ref={passwordRef}
              type="password"
              placeholder="Enter password"
              id="password"
              className="text-right p-1"
              value={password ?? ""}
              onKeyDown={onKeyDownSubmit}
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <button className="w-full bg-red-700 text-white font-semibold cursor-pointer rounded-sm shadow-sm">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
