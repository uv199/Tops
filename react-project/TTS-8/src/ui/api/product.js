import axios from "axios";
import { BE_URL } from "../../config";

export class Product {
  deletProduct(id) {
    return axios({
      method: "delete",
      url: `${BE_URL}/product/delete/${id}`,
      headers: {
        authorization: `Berer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => {
        return { data: res.data, error: null };
      })
      .catch((err) => {
        return { data: null, error: err.res.message };
      });
  }
}

/*
[1,2,3,4,55,67,8,90,12,13,45,6,7,78,99,100]
[1,2,3,4,6,7,8,12,13,45,55,67,78,90,99,100]


*/
