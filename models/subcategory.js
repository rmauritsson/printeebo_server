const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const subCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Sub Category Name is required",
      minlength: [3, "Sub Category name is too short"],
      maxlength: [32, "Sub Category name too long"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
      trim: true,
    },
    parent: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SubCategory", subCategorySchema);
