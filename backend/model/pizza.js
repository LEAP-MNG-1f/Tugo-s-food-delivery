import mongoose from "mongoose";

const PizzaSchema = new mongoose.Schema({
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

export const Pizza = mongoose.model("Pizza", PizzaSchema);
