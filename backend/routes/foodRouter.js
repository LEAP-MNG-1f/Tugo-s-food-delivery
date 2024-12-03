import express from "express";
import {
  getAllFoods,
  updateFood,
  deleteFood,
  createPizza,
  createBurger,
} from "../controllers/foodController.js";

export const pizzaRouter = express.Router();

pizzaRouter.get("/food/pizzas", getAllFoods);
pizzaRouter.post("/food/pizza", createPizza);
pizzaRouter.delete("/food/pizza", deleteFood);
pizzaRouter.put("/food/pizza", updateFood);

export const burgerRouter = express.Router();

burgerRouter.get("/food/burgers", getAllFoods);
burgerRouter.post("/food/burger", createBurger);
burgerRouter.delete("/food/burger", deleteFood);
burgerRouter.put("/food/burger", updateFood);

export default { pizzaRouter, burgerRouter };
