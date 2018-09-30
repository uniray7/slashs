const express = require('express');
const router = express.Router();
const usersRouter = require("./users");
const oauthRouter = require("./auth");

router.use("/homepage", (req, res) => res.send("Welcome slashs D 哥 is handsome homepage"));
router.use("/login", (req, res) => res.send("Welcome slashs D 哥 is handsome login"));
router.use("/users", usersRouter);
router.use("/auth", oauthRouter);

module.exports = router;
