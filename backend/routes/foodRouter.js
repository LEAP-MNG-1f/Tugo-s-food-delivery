import express from "express";
import {
  deleteFood,
  getAllFoods,
  createFood,
  updateFood,
} from "../controllers/foodController.js";

const foodRouter = express.Router();

foodRouter.get("/food", getAllFoods);
foodRouter.post("/food", createFood);
foodRouter.delete("/food", deleteFood);
foodRouter.put("/food", updateFood);

export default foodRouter;
