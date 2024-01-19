import mongoose from "mongoose";

if (!mongoose.models.User) {
  const userSchema = new mongoose.Schema({
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
    },
    online: {
      type: Boolean,
      default: false,
    },
    lastSeen: {
      type: Date,
    },
  });

  mongoose.model("User", userSchema);
}

export default mongoose.model("User");
