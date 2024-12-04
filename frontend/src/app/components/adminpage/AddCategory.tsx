"use client";

import { useEffect, useState } from "react";
import { EditFood } from "./EditFood";
import { AddCategor } from "./AddCategor";
import { AddFood } from "./AddFood";

export const AddCategory = () => {
  const [category, setCategory] = useState<any[]>([]);
  const [foods, setFoods] = useState<any[]>([]);
  const [selectedFood, setSelectedFood] = useState<any | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false); // New state for editing modal

  const skeletonArray = new Array(4).fill(null);

  const fetchFoods = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_PUBLIC_DATABASE_URL}/food`
      );
      const data = await response.json();
      setFoods(data.data);
    } catch (error) {
      console.error("Error fetching foods:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_PUBLIC_DATABASE_URL}/categories`
      );
      const data = await response.json();
      setCategory(data.data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchFoods();
  }, []);

  const handleFoodClick = (foodItem: any) => {
    setSelectedFood(foodItem);
    setIsEditing(true); // Open the modal when a food item is clicked
  };

  const handleEditClick = (foodItem: any) => {
    setSelectedFood(foodItem);
    setIsEditing(true); // Open the edit modal when the edit button is clicked
  };

  const handleCloseModal = () => {
    setSelectedFood(null);
    setIsEditing(false); // Close the modal when the close button is clicked
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const filteredFoods = selectedCategory
    ? foods.filter((food) => food.categoryId === selectedCategory)
    : foods;

  return (
    <div className="flex px-[100px]">
      <div className="w-[350px] py-5">
        <h3 className="text-lg font-bold mb-4">Categories</h3>
        {category.length > 0 ? (
          <div className="flex flex-col gap-7 mb-7">
            {category.map((cat) => (
              <button
                key={cat._id}
                className="flex justify-center items-center py-2 hover:bg-green-600 w-full rounded-xl border-2 hover:text-white"
                onClick={() => handleCategoryClick(cat._id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        ) : (
          <div className="flex flex-col w-full gap-10">
            <div className="skeleton h-10 w-full"></div>
            <div className="skeleton h-10 w-full"></div>
            <div className="skeleton h-10 w-full"></div>
            <div className="skeleton h-10 w-full"></div>
          </div>
        )}
        <AddCategor />
      </div>
      <div className="pl-10 py-5">
        <div className="flex justify-between items-center pb-5">
          <div className="text-lg font-bold">All Foods</div>
          <div className="z-10">
            <AddFood />
          </div>
        </div>

        {foods.length > 0 ? (
          <div className="grid grid-cols-4 gap-5">
            {filteredFoods.map((item) => (
              <div
                key={item._id}
                className="relative flex flex-col cursor-pointer group "
              >
                <img
                  className="h-[300px] w-[500px] rounded-2xl"
                  src={item.image}
                  alt={item.name}
                />
                <p className="font-semibold text-lg">{item.name}</p>
                <p className="text-green-500 font-semibold">{item.price}₮</p>
                <button
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-blue-500 text-white px-3 py-1 rounded"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the click event from triggering the food item click
                    handleEditClick(item);
                  }}
                >
                  Edit
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-[10]">
            {skeletonArray.map((_, index) => (
              <div key={index} className="flex w-[470px] flex-col gap-4">
                <div className="skeleton h-[300px] w-full"></div>
                <div className="skeleton h-4 w-20"></div>
                <div className="skeleton h-4 w-20"></div>
              </div>
            ))}
          </div>
        )}

        {selectedFood && isEditing && (
          <EditFood
            food={selectedFood}
            onClose={handleCloseModal}
            onSave={(updatedFood) => {
              // Handle saving the updated food data (e.g., update state, make API call)
              console.log("Updated Food:", updatedFood);
              handleCloseModal();
            }}
          />
        )}
      </div>
    </div>
  );
};
