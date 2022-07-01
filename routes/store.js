const express = require("express");
const {
  authCheck,
  adminCheck,
  storeOwnerCheck,
} = require("../middlewares/auth");
const {
  createStore,
  readStore,
  updateStore,
  removeStore,
  listStores,
  getStore,
} = require("../controllers/store");

const router = express.Router();

//admin
router.post("/store", authCheck, adminCheck, createStore);
router.get("/stores", listStores);
router.get("/store/:slug", authCheck, adminCheck, readStore);
router.put("/store/:slug", authCheck, adminCheck, updateStore);
router.delete("/store/:slug", authCheck, adminCheck, removeStore);

//creator
router.post("/store", authCheck, storeOwnerCheck, createStore);
router.get("/stores", listStores);
router.get("/store/owner/:_id", getStore);
router.get("/store/:slug", authCheck, storeOwnerCheck, readStore);
router.put("/store/:slug", authCheck, storeOwnerCheck, updateStore);
router.delete("/store/:slug", authCheck, storeOwnerCheck, removeStore);

module.exports = router;
