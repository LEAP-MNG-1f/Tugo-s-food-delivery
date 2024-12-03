import express from "express";
import {
  deleteFood,
  createPizza,
  createBurger,
  getAllPizzas,
  getAllBurgers,
  updateBurger,
  updatePizza,
} from "../controllers/foodController.js";

export const pizzaRouter = express.Router();

pizzaRouter.get("/food/pizzas", getAllPizzas);
pizzaRouter.post("/food/pizza", createPizza);
pizzaRouter.delete("/food/pizza", deleteFood);
pizzaRouter.put("/food/pizza", updatePizza);

export const burgerRouter = express.Router();

burgerRouter.get("/food/burgers", getAllBurgers);
burgerRouter.post("/food/burger", createBurger);
burgerRouter.delete("/food/burger", deleteFood);
burgerRouter.put("/food/burger", updateBurger);

export default { pizzaRouter, burgerRouter };
