import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 255,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    folder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "folder",
      default: null,
    },
    size: {
      type: Number,
      required: true,
      min: 0,
    },
    storageKey: {
      type: String,
      required: true,
      unique: true,
    },
    mimeType: {
      type: String,
      default: "application/octet-stream",
    },
    status: {
      type: String,
      enum: ["PENDING", "READY"],
      default: "PENDING",
    },
    checksum: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

fileSchema.index({ owner: 1, folder: 1, status: 1, name: 1 });
fileSchema.index({ status: 1, createdAt: 1 });

const fileModel = mongoose.model("files", fileSchema);
export default fileModel;
