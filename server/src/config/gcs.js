import { Storage } from "@google-cloud/storage";
import config from "./config.js";

const storage = new Storage({ projectId : config.GCP_PROJECT_ID });

export const bucket = storage.bucket(config.GCP_BUCKET_NAME);