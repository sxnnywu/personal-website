import mongoose from "mongoose";

const LikeSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("Like", LikeSchema);
