import axios from "axios";

export class ProductApi {
  create(data, token) {
    return axios({
      method: "post",
      url: "http://localhost:9999/product/create",
      data,
      headers: {
        // Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log("-----------  res----------->", res.data);
        return res.data;
      })
      .catch((err) => {
        return err;
        console.log("err", err);
      });
  }
}
