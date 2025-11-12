import { Router } from "express";

const userRouter = Router();

//getAll
userRouter.get("/", (req, res) => res.send({ title: "GET all users"}));

//getSingle
userRouter.get("/:id", (req, res) => res.send({ title: "GET a user info"}));

//create
userRouter.post("/", (req, res) => res.send({ title: "CREATE new user"}));

//update
userRouter.put("/:id", (req, res) => res.send({ title: "UPDATE user"}));

//delete
userRouter.delete("/:id", (req, res) => res.send({ title: "DELETE user"}));

export default userRouter;

