import { api } from "./api.service";

interface LoginData {
  username: string;
  password: string;
}

export const login = async (data: LoginData) => {
  try {
    const response = await api.post("/users/login", data);

    return {
      code: response.data.code,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error: any) {
    return {
      code: error.response.data.code,
      message: error.response.data.message,
      data: undefined,
    };
  }
};
