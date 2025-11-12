import { PORT } from "./config/env.js";
import express from "express";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import connectToDatabase from "./database/mongodb.js";

const app = express();

//routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);


app.listen(PORT, async () =>{
    console.log(`LinkUp is running on http://localhost:${PORT}`);

    await connectToDatabase();
});

