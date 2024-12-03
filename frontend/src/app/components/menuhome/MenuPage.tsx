"use client";
import { useEffect, useState } from "react";
import { FoodCard } from "../Card";
import Category from "./CategoryCard";

export const MenuPage = () => {
  const [category, setCategory] = useState<any[]>([]);
  const [foods, setFoods] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const skeletonArray = new Array(4).fill(null);

  // Fetch categories data
  const fetchCategories = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/categories`);
      const data = await response.json();
      setCategory(data.data); // Set only the array part of the response
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Fetch foods data
  const fetchFoods = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/food`);
      const data = await response.json();
      setFoods(data.data); // Set only the array part of the response
    } catch (error) {
      console.error("Error fetching foods:", error);
    }
  };

  // Call fetch functions when component mounts
  useEffect(() => {
    fetchCategories();
    fetchFoods();
  }, []);

  // Function to handle category click
  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  // Filter foods based on the selected category
  const filteredFoods = selectedCategory
    ? foods.filter((food) => food.categoryId === selectedCategory)
    : foods;

  return (
    <div className="px-[100px]">
      <div className="py-10 border-b-2">
        <div className="flex justify-between gap-20">
          {category.map((cat) => (
            <Category
              key={cat._id} // Assuming each category has a unique `id`
              catName={cat.name}
              onClick={() => handleCategoryClick(cat._id)} // Pass category ID to click handler
            />
          ))}
        </div>
      </div>

      {/* Pass the filtered foods to the FoodCard component */}

      {filteredFoods.length > 0 ? (
        <FoodCard foods={filteredFoods} />
      ) : (
        <div className="grid grid-cols-4 gap-10">
          {skeletonArray.map((_, index) => (
            <div key={index} className="flex w-[470px] flex-col gap-4">
              <div className="skeleton h-[300px] w-full"></div>
              <div className="skeleton h-4 w-20"></div>
              <div className="skeleton h-4 w-20"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
