const passport =require("passport")
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
        done(null, user);
});

passport.use(new GoogleStrategy({
        clientID:"19420158024-b2pl63imavfb1108u2ae1refpjrjpfcr.apps.googleusercontent.com",
        clientSecret:"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",
        callbackURL: "http://localhost:3000/google/callback",
        passReqToCallback   : true
    },
    function(request, accessToken, refreshToken, profile, done) {
            return done(null, profile);
    }
));