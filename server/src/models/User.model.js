import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    // required: [true, "User name is required"],
  },

  email: {
    type: String,
    unique: [true, "User name must be unique"],
    trim: true,
    lowercase: true,
    required: [true, "Email is required"],
    minLength: [6, "Email must be 6 character long"],
    maxLength: [50, "Email must no longer then 50 characters"],
  },

  password: {
    type: String,
    required: [true, "Password is required"],
    select: false,
    minLength: [8, "Email must be 6 character long"],
    // maxLength: [20, "Email must no longer then 50 characters"],
  },

  verified: {
    type: Boolean,
    default: false,
  },
});

userSchema.statics.hashPassword = async function (password) {
  return bcrypt.hash(password, 10);
};

userSchema.methods.isValidPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const userModel = mongoose.model("user", userSchema);

export default userModel;
