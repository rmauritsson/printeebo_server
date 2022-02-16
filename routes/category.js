const express = require("express");
const {
  createCategory,
  readCategory,
  updateCategory,
  removeCategory,
  listCategories,
} = require("../controllers/category");
const { authCheck, adminCheck } = require("../middlewares/auth");

const router = express.Router();

//admin
router.post("/category", authCheck, adminCheck, createCategory);
router.get("/categories", listCategories);
router.get("/category/:slug", authCheck, adminCheck, readCategory);
router.put("/category/:slug", authCheck, adminCheck, updateCategory);
router.delete("/category/:slug", authCheck, adminCheck, removeCategory);

module.exports = router;
