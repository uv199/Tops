const socket = io();

socket.on("connection", () => {
    console.log("---->")
  const li = document.createElement("li");
  li.innerText = "user connected";
  document.getElementById("users").appendChild(li);
});
