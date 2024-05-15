import { APIinstance } from "./axiosConfig";

export const fetchAllProduct = async ({ limit, page, search }) => {
  try {
    let response = await APIinstance.get("/product/getAllPaginate", {
      params: { page, limit, search },
    });
    return { error: null, data: response.data };
  } catch (error) {
    return { error: error, data: null };
  }
};
export const deleteProduct = async (id, token) => {
  try {
    let response = await APIinstance.delete(`/product/delete/${id}`, null, {
      headers: {
        authorization: "bearer " + token,
      },
    });
    return { error: null, data: response.data };
  } catch (error) {
    return { error: error, data: null };
  }
};
export const createProduct = async () => {
  try {
    let response = await APIinstance.get("/product/getAll");
    return { error: null, data: response.data };
  } catch (error) {
    return { error: error, data: null };
  }
};
export const updateProduct = async () => {
  try {
    let response = await APIinstance.get("/product/getAll");
    return { error: null, data: response.data };
  } catch (error) {
    return { error: error, data: null };
  }
};
