import { Octokit } from "@octokit/rest";
const octokit = new Octokit({
  auth: "YOUR-TOKEN",
});
let data = await octokit.request("GET /users/{username}/repos", {
  username: "USERNAME",
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
  },
});
console.log("-----------  data----------->", data);
