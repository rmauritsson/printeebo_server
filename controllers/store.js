const Store = require("../models/store");
const slugify = require("slugify");

exports.createStore = async (req, res) => {
  try {
    const { name, owner, description } = req.body;

    const store = await new Store({
      name,
      owner,
      description,
      slug: slugify(name).toLowerCase(),
    }).save();

    res.json(store);
  } catch (err) {
    res.status(400).send("Failed to create Store");
  }
};

exports.readStore = async (req, res) => {
  try {
    const store = await Store.findOne({ slug: req.params.slug }).exec();

    res.json(store);
  } catch (err) {
    res.status(400).send("Failed to find Store");
  }
};

exports.updateStore = async (req, res) => {
  try {
    const { name, owner, description } = req.body;

    const store = await Store.findOneAndUpdate(
      { slug: req.params.slug },
      { name, owner, description, slug: slugify(name).toLowerCase() },
      { new: true }
    ).exec();

    res.json(store);
  } catch (err) {
    res.status(400).send("Failed to update Store");
  }
};

exports.removeStore = async (req, res) => {
  try {
    const store = await Store.findOneAndDelete({
      slug: req.params.slug,
    }).exec();

    res.json(store);
  } catch (err) {
    res.status(400).send("Failed to delete Store");
  }
};

exports.listStores = async (req, res) => {
  try {
    const store = await Store.find({}).sort({ createdAt: -1 }).exec();

    res.json(store);
  } catch (err) {
    res.status(400).send("Failed to list Stores");
  }
};
