"use client";
import { useState } from "react";
import { BurgerCard, PizzaCard } from "../Card";
import { Category } from "./CategoryCard";

export const MenuPage = () => {
  // State to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Function to handle category click
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="px-[100px]">
      <div className="py-10 border-b-2">
        <div className="flex justify-between gap-20">
          <Category
            catName="Pizza"
            onClick={() => handleCategoryClick("Pizza")}
          />
          <Category
            catName="Burger"
            onClick={() => handleCategoryClick("Burger")}
          />
        </div>
      </div>

      {/* Conditionally render the appropriate card(s) based on the selected category */}
      {selectedCategory === null ? (
        <div className="flex flex-col gap-10 py-10">
          <PizzaCard />
          <BurgerCard />
        </div>
      ) : selectedCategory === "Pizza" ? (
        <div className="flex gap-10 py-10">
          <PizzaCard />
        </div>
      ) : selectedCategory === "Burger" ? (
        <div className="flex gap-10 py-10">
          <BurgerCard />
        </div>
      ) : null}
    </div>
  );
};
