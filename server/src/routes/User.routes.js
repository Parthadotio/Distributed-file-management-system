import { Router } from "express";
import * as userController from "../controllers/user.controller.js";

const authRouter = Router();

authRouter.post("/register", userController.register);
authRouter.post("/login", userController.login);
authRouter.get("/refresh-token", userController.refreshToken);
authRouter.get("/logout", userController.logout);
authRouter.get("/logout-all", userController.logoutAll);
authRouter.post("/verify-email", userController.verifyEmail);

//To-do: New route for get user data authrouter.get("/me")


export default authRouter;