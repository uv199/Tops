import { APIinstance } from "./axiosConfig";

// =================GetAllProduct API===========================
export const fetchAllUser = async () => {
    try {
      let response = await APIinstance.get("/user/getAll");
      return { error: null, data: response.data };
    } catch (error) {
      return { error: error, data: null };
    }
  };
