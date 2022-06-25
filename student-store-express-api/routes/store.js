const express = require("express");
const Store = require("../models/store")
const {BadRequestError, NotFoundError} = require("../utils/errors");
const router = express.Router();

router.post("/", async (req, res, next) => {
   try {
      const shoppingCart = req.body.shoppingCart;
      const user = req.body.user;
      const newPurchase = await Store.createPurchase(user, shoppingCart);
      res.status(201).json({purchase : {newPurchase}});
   } catch (error) {
      next(error);
   }
})

// dynamix array
router.get("/", async (req, res, next) => {
   try {
      const products = await Store.getProducts();
      const purchases = await Store.getPurchases();
      res.status(200).json({"products": products, purchases});
   } catch (error) {
      next(error);
   }
})

router.get("/:productId", async (req, res, next) => {
   try {
      const id = req.params.productId;
      const product = await Store.fetchProduct(id);
      if (!product) {
         throw new NotFoundError("No product found");
      }
      res.status(200).json({product});
   } catch (error) {
      next(error);
   }
})

module.exports = router;