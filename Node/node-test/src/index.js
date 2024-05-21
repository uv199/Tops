import bodyParser from "body-parser";
import express from "express";
import { connectDB } from "./db/db.js";
import { Server } from "http";
import { Server as socket } from "socket.io";

const app = express();

app.use(express.json()); // body
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hellow world");
});

app.get("/chat", (req, res) => {
  res.sendFile(
    "C:\\Users\\admin\\Desktop\\Urvish_JS\\Tops\\Node\\node-test\\src\\chat.html"
  );
});

let http = Server(app);

const io = new socket(http);
io.on("connection", (socket) => {
  console.log("User connected....!");

  socket.on("send-msg", (data) => {
    console.log("-----------  data----------->", data);
    // store to data base
    // io for all connected user
    // socket for only user which call event
    io.emit("receive-msg", data.message);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected...!");
  });
});

io.listen(8000);
connectDB();
http.listen(5000, () => {
  console.log(`server is running on http://localhost:5000`);
});
