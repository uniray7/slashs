const express = require('express');
const passport = require('passport');
var router = express.Router();

/* GET users listing. */
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/homepage');
  });

module.exports = router;
