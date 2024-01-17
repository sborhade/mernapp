import express, { Request, Response } from 'express';
import User from '../models/user';
import jwt from "jsonwebtoken";

const router = express.Router();

// api/user/register
router.post("/register", async (req: Request, res: Response) => {

    try {
        let user = await User.findOne({
            email: req.body.email,
        })

        if (user) {
            return res.status(400).json({ message: "User alredy exists" });
        }

        user = new User(req.body);

        await user.save();

        const token = jwt.sign({ userId: user._id },
            process.env.JWT_SECRET_KEY as string,
            { expiresin: "1d" });

        res.cookie("auth_token", token, {
            httpOnly: true,
            secure: process.env.JWT_SECRET_KEY === "production",
            maxAge: 86400000
        });

        return res.sendStatus(200);

    } catch (error) {
        return res.status(500).send({ message: "something went wrong" });
    }
});

export default router;
