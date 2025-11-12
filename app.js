import { PORT } from "./config/env.js";
import express from "express";

const app = express();

// testing
console.log("Welcome to the LinkUp");

app.listen(PORT, () =>{
    console.log(`LinkUp is running on http://localhost:${PORT}`);
})

