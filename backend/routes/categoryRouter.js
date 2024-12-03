import express from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getOneCategory,
  updateCategory,
} from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.get("/categories", getAllCategory);
categoryRouter.post("/categories", createCategory);
categoryRouter.delete("/categories", deleteCategory);
categoryRouter.put("/categories", updateCategory);
categoryRouter.get("/categoriesOne/:id", getOneCategory);

export default categoryRouter;
