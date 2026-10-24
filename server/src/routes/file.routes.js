import { Router } from "express";
import fileModel from "../models/File.model.js";
import * as fileController from "../controllers/file.controller.js"

const fileRouter = Router();

fileRouter.post("/api/upload",fileController.upload);
