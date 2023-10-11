import GoogleStrategy from "passport-google-oauth20";
import passport from "passport";

passport.use(
  new GoogleStrategy.Strategy(
    {
      clientID:
        "738291599028-s61qkm9uc91s1phgoniutfbf9j4dbhpu.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: `https://2d7b-122-162-6-240.ngrok-free.app/auth/google/callback`,
    },
    function (accessToken, refreshToken, profile, cb) {
      cb();
      // console.log("profile", profile);
      // User.({ googleId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });
    }
  )
);
