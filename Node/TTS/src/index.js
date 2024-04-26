import express from "express";
import passport from "passport";
import session from "express-session";
import OAuth2Strategy from "passport-google-oauth";
let GoogleStrategy = OAuth2Strategy.OAuth2Strategy;
const app = express();

// Express session middleware
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
  })
);

// Passport initialization middleware
app.use(passport.initialize());
app.use(passport.session());

// Google OAuth configuration
passport.use(
  new GoogleStrategy(
    {
      clientID: "738291599028-s61qkm9uc91s1phgoniutfbf9j4dbhpu.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "https://d582-106-214-150-8.ngrok-free.app/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      // Here you can handle user creation and save profile to database
      return done(null, profile);
    }
  )
);

// Serialize user
passport.serializeUser(function (user, done) {
  done(null, user);
});

// Deserialize user
passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

// Route for Google authentication
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login"],
  })
);

// Callback route after Google authentication
app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

// Example protected route
app.get("/profile", ensureAuthenticated, function (req, res) {
  res.send("Welcome, " + req.user.displayName + "!");
});

// Middleware to ensure user is authenticated
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

// Start server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
