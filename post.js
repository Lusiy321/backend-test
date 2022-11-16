import mongoose from "mongoose";

const Post = new mongoose.Schema({
  test: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.model("post", Post);
