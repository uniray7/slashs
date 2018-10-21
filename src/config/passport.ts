import passport from 'passport';

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: 'GOOGLE_CLIENTID',
      clientSecret: 'GOOGLE_SECRET',
      callbackURL: 'http://angusishansome.io:4000/auth/google/callback'
    },
    function(accessToken, refreshToken, profile, cb) {
      //    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //      return cb(err, user);
      //    });
      console.log('Success oauth', accessToken);
      console.log(cb);
    }
  )
);
