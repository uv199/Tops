import { APIinstance } from "./axiosConfig";

export const loginApi = async (data) => {
  try {
    let response = await APIinstance.post("/user/signin", data);
    return { error: null, data: response.data };
  } catch (error) {
    return { error: error, data: null };
  }
};

export const registerApi = async (data) => {
  try {
    let response = await APIinstance.post("/user/signup", data);
    return { error: null, data: response.data };
  } catch (error) {
    return { error: error, data: null };
  }
};
