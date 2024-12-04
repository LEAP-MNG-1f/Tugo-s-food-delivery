"use client";
import { useState, useEffect } from "react";

type Category = {
  _id: string;
  name: string;
};

type Food = {
  _id: string;
  name: string;
  price: number;
  ingredient: string;
  categoryId: string;
  image: string;
};

interface EditFoodProps {
  food: Food;
  onClose: () => void;
  onSave: (updatedFood: Food) => void;
}

export const EditFood = ({ food, onClose, onSave }: EditFoodProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [foodName, setFoodName] = useState(food.name);
  const [price, setPrice] = useState(food.price);
  const [ingredients, setIngredients] = useState(food.ingredient);
  const [selectedCategory, setSelectedCategory] = useState(food.categoryId);
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/categories");
        const data = await response.json();
        setCategories(data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    // Construct the updated food object
    const updatedFood = {
      ...food,
      name: foodName,
      price: parseFloat(price.toString()),
      ingredient: ingredients,
      categoryId: selectedCategory,
      image: image ? URL.createObjectURL(image) : food.image, // Use the new image or keep the existing one
    };

    // Call the onSave function passed as a prop
    onSave(updatedFood);

    // Close the modal after saving changes
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-[500px]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black font-bold text-2xl"
        >
          ×
        </button>
        <h3 className="text-xl font-semibold mb-4">Edit Food</h3>
        <div className="flex flex-col gap-4">
          <label className="font-medium">Food Name</label>
          <input
            type="text"
            className="border rounded-lg p-2 w-full"
            placeholder="Enter food name"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
          />
          <label className="font-medium">Price</label>
          <input
            type="number"
            className="border rounded-lg p-2 w-full"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
          <label className="font-medium">Ingredients</label>
          <textarea
            className="border rounded-lg p-2 w-full"
            placeholder="Enter ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
          <label className="font-medium">Category</label>
          <select
            className="border rounded-lg p-2 w-full"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="" disabled>
              Select category
            </option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
          <label className="font-medium">Image</label>
          <input
            type="file"
            className="border rounded-lg p-2 w-full"
            accept="image/*"
            onChange={handleImageChange}
          />
          <button
            className="bg-green-500 text-white py-2 rounded-lg w-full"
            onClick={handleSubmit}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};
