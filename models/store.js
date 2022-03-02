const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const storeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Store Name is required",
      minlength: [3, "Store name is too short"],
      maxlength: [120, "Store name too long"],
    },
    owner: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    description: {
      type: String,
      minlength: [120, "Store description is too short"],
      maxlength: [255, "Store name too long"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Store", storeSchema);
