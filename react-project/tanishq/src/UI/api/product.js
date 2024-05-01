import { APIinstance } from "./axiosConfig";

export const fetchAllProduct = async () => {
  try {
    let response = await APIinstance.get("/product/getAll");
    return { error: null, data: response.data };
  } catch (error) {
    return { error: error, data: null };
  }
};
