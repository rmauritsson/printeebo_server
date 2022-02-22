const express = require("express");
const {
  createSubCategory,
  readSubCategory,
  updateSubCategory,
  removeSubCategory,
  listSubCategories,
} = require("../controllers/subcategory");
const { authCheck, adminCheck } = require("../middlewares/auth");

const router = express.Router();

//admin
router.post("/subcategory", authCheck, adminCheck, createSubCategory);
router.get("/subcategories", listSubCategories);
router.get("/subcategory/:slug", authCheck, adminCheck, readSubCategory);
router.put("/subcategory/:slug", authCheck, adminCheck, updateSubCategory);
router.delete("/subcategory/:slug", authCheck, adminCheck, removeSubCategory);

module.exports = router;
