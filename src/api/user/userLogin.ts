import { RESTfulAPIURL } from "../apiURL";

interface LoginForm {
  username: string;
  password: string;
}

const loginUser = async (form: LoginForm): Promise<Response> => {
  const res = await fetch(`${RESTfulAPIURL}/user/login`, {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res;
};

export { loginUser, type LoginForm };
