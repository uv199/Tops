import app from "./app";
import { config } from "./config";
import { dbConnect } from "./db/db";

const port = config.port || 8000;

dbConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("Somthing went wrong in DB connection");
  });
