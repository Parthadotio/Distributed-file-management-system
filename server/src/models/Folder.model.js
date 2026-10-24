import mongoose from "mongoose";

const folderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 255,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: "true",
    },
    parent: {
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

folderSchema.index({ owner: 1, parent: 1, name: 1 });

const folderModel = new mongoose.model("folder", folderSchema);
export default folderModel;
