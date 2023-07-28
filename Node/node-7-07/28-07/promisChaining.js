let p = new Promise((resolve, reject) => {
  console.log("test===>");
  let data = find({ name: "test" });
  data ? resolve("urvish") : reject("data not found");
});

p.then((res) => {
  console.log("res--->", res);
  return res + " patel";
})
  .then((res2) => {
    console.log("res2--->", res2);
  })
  .catch((e) => {
    console.log("---er---", e);
  });

// const getPostsData = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// };

// task print  name in then
