import { Food } from "../model/food.js";

const createFood = async (request, response) => {
  const result = await Food.create({
    name: "burger5",
    image:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    ingredient:
      "salad, tomato, cheese, meat, bun, onion, bacon, sauce, cucumber, sauce, flavor",
    price: 24999,
    categoryId: "674ec5e46ec8968c3373621b",
  });

  response.json({
    success: true,
    data: result,
  });
};

const getAllFoods = async (request, response) => {
  const groupedFood = await Food.find();

  response.json({
    success: true,
    data: groupedFood,
  });
};

const getCategorizedFoods = async (request, response) => {
  try {
    const { selectedCategory } = request.query;
    const result = await Food.find().populate("categoryId");

    const categorizedFoods = result.filter((foods) => {
      if (foods?.categoryId.name === selectedCategory) {
        return foods;
      }
    });

    response.json({
      success: true,
      data: categorizedFoods,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteFood = async (request, response) => {
  try {
    const result = await Food.findByIdAndRemove({
      _id: "",
    });

    response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const updateFood = async (request, response) => {
  const result = await Food.findByIdAndUpdate("674ef1984f2ca79d285cd960", {
    categoryId: "674ecef31b8cb31c6d5677ce",
  });

  response.json({
    success: true,
    data: result,
  });
};

export { getAllFoods, createFood, deleteFood, updateFood, getCategorizedFoods };
