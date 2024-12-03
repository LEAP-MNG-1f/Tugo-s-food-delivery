import { Category } from "../model/category.js";

const createCategory = async (request, response) => {
  const result = await Category.create({
    name: "Pizza",
  });

  response.json({
    success: true,
    data: result,
  });
};

const getAllCategory = async (request, response) => {
  try {
    const result = await Category.find();

    response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getOneCategory = async (request, response) => {
  try {
    const result = await Category.findById();

    response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteCategory = async (request, response) => {
  try {
    const result = await Category.findByIdAndRemove({
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
const updateCategory = async (request, response) => {
  try {
    const result = await Category.findByIdAndUpdate({
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

export {
  getAllCategory,
  createCategory,
  deleteCategory,
  updateCategory,
  getOneCategory,
};
