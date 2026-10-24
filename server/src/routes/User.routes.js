import { Router } from "express";
import User from "../models/user.model.js";
import * as userController from "../controllers/user.controller.js";

const authRouter = Router();

authRouter.post("/register", userController.register);
authRouter.post("/login", userController.login);
authRouter.get("/refresh-token", userController.refreshToken);
authRouter.get("/logout", userController.logout);
authRouter.get("/logout-all", userController.logoutAll);
authRouter.post("/verify-email", userController.verifyEmail);


export default authRouter;