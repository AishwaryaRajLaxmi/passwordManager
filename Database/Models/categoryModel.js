const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("category", categorySchema);
