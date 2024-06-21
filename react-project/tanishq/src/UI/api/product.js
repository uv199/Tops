import { APIinstance } from "./axiosConfig";


// =================GetAllProduct API===========================
export const fetchAllProduct = async ({limit,page,searchQuery}) => {
  try {
    let response = await APIinstance.get("/product/getAllPaginate",{
      params:{page,limit,search:searchQuery}
    });
    return { error: null, data: response.data };
  } catch (error) {
    return { error: error, data: null };
  }
};

export const getAllProduct = async (filter) => {
  try {
    let response = await APIinstance.get("/product/getAll", {
      params: filter,
    });
    // console.log("response:", response);
    return { error: null, data: response.data };
  } catch (error) {
    console.log("error:", error);
    return { error: error, data: null };
  }
};

// export const deleteProduct = async (id,token) => {
//   try {
//     let response = await APIinstance.delete("/product/delete" + id,null,{
//       headers: {
//         authorization: "bearer " + token,
//       },
//     });
//     console.log("response:", response)
//     return { error: null, data: response.data };
//   } catch (error) {
//     console.log("error:", error)
//     return { error: error, data: null };
//   }
// };

// =================DeleteProduct API===========================
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

// =================Crete Product API===========================
export const createProduct = async (data) => {
  // console.log("🚀 ~ file: Product.js:47 ~ createProduct ~ data:", data)
  try {
    let response = await APIinstance.post("/product/create",data);
    console.log("Createe Product", response)
    return { error: null, data: response.data };
  } catch (error) {
    return { error: error, data: null };
  }
};

// =================Update Product API===========================
export const updateProduct = async (data,id) => {
  try {
    let response = await APIinstance.put("/product/update/" + id,data);
    console.log("Createe Product", response)
    return { error: null, data: response.data };
  } catch (error) {
    return { error: error, data: null };
  }
};
