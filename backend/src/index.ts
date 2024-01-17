import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import userRoutes from './routes/users';

mongoose.connect(process.env.MONGO_CONNECTION_STRING as string);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/user", userRoutes);

app.get("/api/test", async (req: Request, res: Response) => {
    res.json({ message: "Hello from get rest endpoint" });
});

app.listen(7000, () => {
    console.log("Server  running on localhost:7000");
});

