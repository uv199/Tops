import app from "./app";
import { config } from "./config";
import { dbConnect } from "./db/db";

import { Server } from "socket.io";

const io = new Server({});

const port = config.port || 8000;

io.on("connection", (socket) => {
  console.log("Socket connected..!");
});

io.listen(3000);

dbConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("Somthing went wrong in DB connection");
  });
