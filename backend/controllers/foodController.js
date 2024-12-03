import { Burger } from "../model/burger.js";
import { Pizza } from "../model/pizza.js";

const createPizza = async (request, response) => {
  const result = await Pizza.create({
    name: "pizza4",
    image:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134862/shake-shack-shackburger-8-pack.973a5e26836ea86d7e86a327becea2b0.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    ingredient:
      "salad, tomato, cheese, meat, bun, onion, bacon, sauce, cucumber, sauce",
    price: 24999,
  });

  response.json({
    success: true,
    data: result,
  });
};

const createBurger = async (request, response) => {
  const result = await Burger.create({
    name: "burger4",
    image:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131436/le-big-matt-kit-for-6.1ddae6e382bb3218eeb0fd5247de115a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    ingredient:
      "milk, cheese, butter, flour, garlic, red pepper, onion, green pepper",
    price: 24999,
  });

  response.json({
    success: true,
    data: result,
  });
};
const getAllPizzas = async (request, response) => {
  const groupedFood = await Pizza.find();

  response.json({
    success: true,
    data: groupedFood,
  });
};

const getAllBurgers = async (request, response) => {
  const groupedFood = await Burger.find();

  response.json({
    success: true,
    data: groupedFood,
  });
};

const getCategorizedFoods = async (request, response) => {
  const { selectedCategory } = request.query;
  const result = await Pizza.find().populate("categoryId");

  const categorizedFoods = result.filter((foods) => {
    if (foods?.categoryId.name === selectedCategory) {
      return foods;
    }
  });

  response.json({
    success: true,
    data: categorizedFoods,
  });
};

const deleteFood = async (request, response) => {
  const result = await Pizza.findOneAndDelete({
    _id: "",
  });

  response.json({
    success: true,
    data: result,
  });
};
const updatePizza = async (request, response) => {
  const result = await Pizza.findByIdAndUpdate("674e9513d296a425d478b7b7", {
    image:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133398/choose-your-own-deep-dish-pizza-3-pack.4111791511244a4946bb5c9ad2c17da9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  });

  response.json({
    success: true,
    data: result,
  });
};

const updateBurger = async (request, response) => {
  const result = await Burger.findByIdAndUpdate("674e97e24e959a2a11ac5d0f", {
    image:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96214/goldbelly-burger-blend-1-lb.13a21b66edf7173a59c75c3a6d2f981b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  });

  response.json({
    success: true,
    data: result,
  });
};

export {
  createPizza,
  createBurger,
  getAllPizzas,
  getAllBurgers,
  deleteFood,
  updatePizza,
  updateBurger,
  getCategorizedFoods,
};
