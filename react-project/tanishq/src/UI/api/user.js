import { APIinstance } from "./axiosConfig";

// =================GetAllProduct API===========================
export const fetchAllUser = async () => {
    try {
      let response = await APIinstance.get("/user/getAll");
      console.log("🚀 ~ file: user.js:7 ~ fetchAllProduct ~ response:", response)
      return { error: null, data: response.data };
    } catch (error) {
      return { error: error, data: null };
    }
  };