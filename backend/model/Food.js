import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  ingredient: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  categoryId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
    required: true,
  },
});

export const Food = mongoose.model("Food", FoodSchema);
