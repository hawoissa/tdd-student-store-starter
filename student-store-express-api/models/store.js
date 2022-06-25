const { storage } = require("../data/storage");
const { BadRequestError } = require("../utils/errors");

class Store {
   static async createPurchase(user, shoppingCart) {
      if (!user || !shoppingCart) {
         throw new BadRequestError("Customer must fill out checkout form and contain something in cart");
      }
      if (shoppingCart.length < 1) {
         throw new BadRequestError("Customer must have at least one item in cart.");
      }
      let itemArray = [];
      let totalCost = 0;

      //check required fields for shopping cart and user feilds //if else BADREQUESTERROR
      if (!user.name) {
         throw new BadRequestError("Type in proper name.");
      } else if (!user.email) {
         throw new BadRequestError("Type in proper email.");
      }

      let receipt = [];
      receipt.push("Showing receipt for " + user.name + " available at " + user.email + ": ");

      // go over shopping cart - make receipt
      shoppingCart.forEach( (item) => {
         if (!item.id || item.quantity == 0) {
            throw new BadRequestError("Invalid shopping cart.");
         }
         const product =  Store.fetchProduct(item.id);
         let cost = product.price * item.quantity
         totalCost += cost * 1.0875;
         itemArray.push(item);
         receipt.push(item.quantity + " total " + product.name + " purchased at a cost of $" + (product.price).toFixed(2) + " for a total cost of $" + cost);
      });

      receipt.push("Before taxes, the subtotal was $" + (totalCost / 1.0875).toFixed(2));
      receipt.push("After taxes and fees were applied, the total comes out to $" + totalCost.toFixed(2));

      //record new purchase
      const purchasedAt = new Date().toISOString();
      const purchases = await Store.getPurchases();
      //const purchases = shoppingCart.length + 1;
      const purchaseId = purchases.length + 1;
      //const purchaseId = shoppingCart.length + 1;
      //for loop to check for duplicates
      for (let i = 0; i < itemArray.length; i++) {
         if (itemArray[i]?.id == itemArray[i+1]?.id) {
            throw new BadRequestError("Request Invalid. No duplicates allowed.");
         }
      }
      totalCost = totalCost.toFixed(2);

      const newPurchase = {
         id:purchaseId, 
         name:user.name, 
         email:user.email, 
         order:shoppingCart, 
         total:totalCost, 
         purchasedAt,
         receipt
      };
      storage.get("purchases").push(newPurchase).write();
      return newPurchase;
   }

   static getProducts() {
      const products = storage.get("products").value();
      return products; 
   }

   static getPurchases() {
      const purchases = storage.get("purchases").value();
      return purchases; 
   }

   static fetchProduct(productId) {
      const product = storage.get("products").find({id: Number(productId)}).value();
      return product;
   }
}

module.exports = Store;