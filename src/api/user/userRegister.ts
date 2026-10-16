import { RESTfulAPIURL } from "../apiURL";

interface RegisterForm {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;

  roleID: number;
}

const registerUser = async (form: RegisterForm): Promise<Response> => {
  const res = await fetch(`${RESTfulAPIURL}/user`, {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res;
};

export { registerUser, type RegisterForm };
