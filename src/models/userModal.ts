import mongoose from "mongoose";

// Define the schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^\S+@\S+\.\S+$/,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    // online: {
    //   type: Boolean,
    //   default: false,
    // },
    // lastSeen: {
    //   type: Date,
    // },
  },
  { timestamps: true }
);

// Create or retrieve the model based on the schema
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
