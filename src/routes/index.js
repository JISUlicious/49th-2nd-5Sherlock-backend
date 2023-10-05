const express = require("express");

const { productsRouter } = require("./products.router");
const { destinationsRouter } = require("./destinations.router");
const { cartsRouter } = require("./carts.router");
const { usersRouter } = require("./users.router");
const { ordersRouter } = require("./orders.router");
const { validateToken } = require("../middleware/auth");

const router = express.Router();

router.use("/products", productsRouter);
router.use("/orders", validateToken, ordersRouter);
router.use("/users", usersRouter); 
router.use("/products", productsRouter); 
router.use("/destinations", destinationsRouter);
router.use("/carts", cartsRouter);


module.exports = { router };
