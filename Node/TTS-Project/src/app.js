import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import passport from "passport";
import axios from "axios";
import userRouter from "./router/user";
import likeRouter from "./router/like";
import postRouter from "./router/post";
import messageRouter from "./router/message";
import session from "express-session";

const GOOGLE_CLIENT_ID = "";
const GOOGLE_CLIENT_SECRET = "";

var GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL:
        "https://2ade-106-214-150-8.ngrok-free.app/auth/google/callback",
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ],
    },
    async function (accessToken, refreshToken, profile, cb) {
      console.log("-----------  accessToken----------->", accessToken);
      console.log("-----------  refreshToken----------->", refreshToken);
      console.log("-----------  profile----------->", profile);
      // create or not in db
      // call api - https://www.googleapis.com/auth/userinfo.profile

      let data = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      );
      console.log("-----------  data----------->", data.data);
      return cb(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((user, done) => {
  // User.findById(id, function(err, user) {
  done(err, user);
  // });
});
const app = express();

app.use(
  session({
    secret: "test",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/auth/failed" }),
  (req, res) => {
    console.log("----test");
    res.send("Welcome by google auth");
  }
);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] }),
  (req, res) => {
    res.redirect("/auth/google/callback");
  }
);
app.get(
  "/auth/failed",
  passport.authenticate("google", { scope: ["profile"] }),
  (req, res) => {
    res.send("login fail");
  }
);

app.use(express.json());
app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/like", likeRouter);
app.use("/message", messageRouter);

app.get("/", (_, res) => {
  res.send("hello world..!");
});

export default app;
