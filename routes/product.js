const express = require("express");
const {
  authCheck,
  adminCheck,
  storeOwnerCheck,
} = require("../middlewares/auth");
const {
  createProduct,
  readProduct,
  updateProduct,
  removeProduct,
  listProducts,
} = require("../controllers/product");

const router = express.Router();

//admin
router.post("/product", authCheck, adminCheck, createProduct);
router.get("/products", listProducts);
router.get("/product/:slug", authCheck, adminCheck, readProduct);
router.put("/product/:slug", authCheck, adminCheck, updateProduct);
router.delete("/product/:slug", authCheck, adminCheck, removeProduct);

//creator
router.post("/product", authCheck, storeOwnerCheck, createProduct);
router.get("/products", listProducts);
router.get("/product/:slug", authCheck, storeOwnerCheck, readProduct);
router.put("/product/:slug", authCheck, storeOwnerCheck, updateProduct);
router.delete("/product/:slug", authCheck, storeOwnerCheck, removeProduct);

module.exports = router;
