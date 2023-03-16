const mongoose = require("mongoose");
const passwordSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    userName: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    //   required: true,
    },

    
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("password", passwordSchema);
