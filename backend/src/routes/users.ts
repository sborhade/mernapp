import express, { Request, Response } from 'express';
import User from '../models/user';
import jwt from "jsonwebtoken";
import { check, validationResult } from 'express-validator';

const router = express.Router();

// api/user/register
router.post("/register", [
    check("firstName", "First Name is required").isString(),
    check("lastName", "Last Name is required").isString(),
    check("email", "Email is required").isEmail(),
    check("password", "Password should be 6 or more characters").isLength({ min: 6 }),
], async (req: Request, res: Response) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array() });
    }

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
            { expiresIn: "1d" });

        res.cookie("auth_token", token, {
            httpOnly: true,
            secure: process.env.JWT_SECRET_KEY === "production",
            maxAge: 86400000
        });

        return res.status(200).send({ message: "User registered OK" });

    } catch (error) {
        console.log(error);

        return res.status(500).send({ message: "something went wrong" });
    }
});

export default router;
