import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
// import { User } from "./models/user";
import userRouter from "./router/user";

import { Octokit } from "@octokit/rest";
import fs from "fs"
const octokit = new Octokit({
  auth: "",
});

(async function test(params) {
  // let data = await octokit.request("GET /users/neel0402/repos", {
  //   username: "neel0402",
  //   headers: {
  //     "X-GitHub-Api-Version": "2022-11-28",
  //   },
  // });
  let data = await octokit.request('PUT /user/starred/neel0402/homepage', {
    owner: 'OWNER',
    repo: 'REPO',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  // let data2 = await octokit.request("GET /user/starred", {
  //   // username: "neel0402",
  //   headers: {
  //     "X-GitHub-Api-Version": "2022-11-28",
  //   },
  // });
  console.log("-----------  data2----------->", data)

  const jsonString = JSON.stringify(data, null, 2);

  const filePath = "./data.json";

  fs.writeFile(filePath, jsonString, (err) => {
    if (err) {
      console.error("Error writing JSON file:", err);
    } else {
      console.log("JSON file created successfully!");
    }
  });
})();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/user", userRouter);
app.listen(3000, () => {
  console.log(`server is runing on http://localhost:${port}`);
});
