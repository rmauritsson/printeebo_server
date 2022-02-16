const Category = require("../models/category");
const slugify = require("slugify");

exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const category = await new Category({
      name,
      slug: slugify(name).toLowerCase(),
    }).save();

    res.json(category);
  } catch (err) {
    res.status(400).send("Failed to create category");
  }
};

exports.readCategory = async (req, res) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug }).exec();

    res.json(category);
  } catch (err) {
    res.status(400).send("Failed to find category");
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const category = await Category.findOneAndUpdate(
      { slug: req.params.slug },
      { name, slug: slugify(name).toLowerCase() },
      { new: true }
    ).exec();

    res.json(category);
  } catch (err) {
    res.status(400).send("Failed to update category");
  }
};

exports.removeCategory = async (req, res) => {
  try {
    const category = await Category.findOneAndDelete({
      slug: req.params.slug,
    }).exec();

    res.json(category);
  } catch (err) {
    res.status(400).send("Failed to delete category");
  }
};

exports.listCategories = async (req, res) => {
  try {
    const category = await Category.find({}).sort({ createdAt: -1 }).exec();

    res.json(category);
  } catch (err) {
    res.status(400).send("Failed to list categories");
  }
};
