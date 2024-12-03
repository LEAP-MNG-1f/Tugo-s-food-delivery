import mongoose from "mongoose";

const BurgerSchema = new mongoose.Schema({
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
});

export const Burger = mongoose.model("Burger", BurgerSchema);
