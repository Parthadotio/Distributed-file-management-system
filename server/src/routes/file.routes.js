import { Router } from "express";
import fileModel from "../models/file.model.js";
import * as fileController from "../controllers/file.controller.js"

const fileRouter = Router();

fileRouter.post("/api/files/init",fileController.filesInit);
fileRouter.post("/api/files/:id/complete");


fileRouter.get("/api/files/:id/metadata", fileController.getMetadata);
fileRouter.get("/api/:id/download", fileController.downloadFile);

fileRouter.patch("/api/files/:id", fileController.updateFile);

fileRouter.delete("/api/files/:id", fileController.deleteFile);
