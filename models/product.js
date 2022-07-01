const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      text: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
      text: true,
    },
    price: {
      type: Number,
      trim: true,
      //required: true,
      text: true,
    },
    category: {
      type: ObjectId,
      ref: "Category",
    },
    subcategories: [
      {
        type: ObjectId,
        ref: "SubCategory",
      },
    ],
    store: {
      type: ObjectId,
      ref: "Store",
      required: true,
    },
    sold: {
      type: Number,
      default: 0,
    },
    //images: {
    //type: Array,
    //},
    shipping: {
      type: String,
      enum: ["Yes", "No"],
    },
    colors: [
      {
        type: String,
        enum: [
          "Black",
          "Red",
          "Navy Blue",
          "Army Green",
          "White",
          "Gray",
          "Yellow",
        ],
      },
    ],
    styles: [
      {
        type: String,
        enum: [
          "Short Sleeved V-Neck",
          "Long Sleeved V-Neck",
          "Polo",
          "Short Sleeved",
          "Long Sleeved",
        ],
      },
    ],
    expectedDeliveryDate: { type: Number },
    sizes: [
      {
        type: String,
      },
    ],
    //ratings: [
    //{
    //star: Number,
    //postedBy: { type: ObjectId, ref: "User" },
    //},
    //],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
