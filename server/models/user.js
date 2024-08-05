import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";

const { isEmail } = validator;

// User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  createDatetime: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.checkPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;
