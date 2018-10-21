import express from 'express';
import usersRouter from "./users";
import oauthRouter from "./auth";

const router = express.Router();

router.use("/homepage", (req, res) => res.send("Welcome slashs D 哥 is handsome homepage"));
router.use("/login", (req, res) => res.send("Welcome slashs D 哥 is handsome login"));
router.use("/users", usersRouter);
router.use("/auth", oauthRouter);

export default router;