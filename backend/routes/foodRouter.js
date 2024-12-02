import express from "express";
import {
  createFood,
  getAllFoods,
  updateFood,
  getCategorizedFoods,
} from "../controllers/foodController.js";
import { deleteFood } from "../controllers/foodController.js";

const foodRouter = express.Router();

foodRouter.get("/foods", getAllFoods);
foodRouter.get("/categorized", getCategorizedFoods);
foodRouter.post("/foods", createFood);
foodRouter.delete("/foods", deleteFood);
foodRouter.put("/foods", updateFood);

export default foodRouter;
