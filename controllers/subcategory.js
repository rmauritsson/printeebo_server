const SubCategory = require("../models/subcategory");
const slugify = require("slugify");

exports.createSubCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const subcategory = await new SubCategory({
      name,
      slug: slugify(name).toLowerCase(),
    }).save();

    res.json(subcategory);
  } catch (err) {
    res.status(400).send("Failed to create sub category");
  }
};

exports.readSubCategory = async (req, res) => {
  try {
    const subcategory = await SubCategory.findOne({
      slug: req.params.slug,
    }).exec();

    res.json(subcategory);
  } catch (err) {
    res.status(400).send("Failed to find sub category");
  }
};

exports.updateSubCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const subcategory = await SubCategory.findOneAndUpdate(
      { slug: req.params.slug },
      { name, slug: slugify(name).toLowerCase() },
      { new: true }
    ).exec();

    res.json(subcategory);
  } catch (err) {
    res.status(400).send("Failed to update sub category");
  }
};

exports.removeSubCategory = async (req, res) => {
  try {
    const subcategory = await SubCategory.findOneAndDelete({
      slug: req.params.slug,
    }).exec();

    res.json(subcategory);
  } catch (err) {
    res.status(400).send("Failed to delete sub category");
  }
};

exports.listSubCategories = async (req, res) => {
  try {
    const subcategory = await SubCategory.find({})
      .sort({ createdAt: -1 })
      .exec();

    res.json(subcategory);
  } catch (err) {
    res.status(400).send("Failed to list sub categories");
  }
};
