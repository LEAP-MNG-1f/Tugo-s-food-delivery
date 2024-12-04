"use client";

import { useEffect, useState } from "react";
import { ButtonRoute } from "../ButtonRoute";

type FoodProps = {
  title: string;
  router: string;
  category: string; // Category prop for filtering
};

export const Food = (props: FoodProps) => {
  const [selectedFood, setSelectedFood] = useState<any | null>(null);
  const [foods, setFoods] = useState<any[]>([]);
  const skeletonArray = new Array(4).fill(null);
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };

  const decrease = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  const fetchFoods = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/food`);
      const data = await response.json();
      // Filter foods by category and limit to 4 items
      const categoryFoods = data.data
        .filter((item: any) => item.categoryId === props.category)
        .slice(0, 4); // Get only the first 4 items
      setFoods(categoryFoods);
    } catch (error) {
      console.error("Error fetching foods:", error);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, [props.category]); // Run effect when category changes

  const handleFoodClick = (foodItem: any) => {
    setSelectedFood(foodItem);
  };

  const handleCloseModal = () => {
    setSelectedFood(null);
  };

  return (
    <div className="px-[100px]">
      <div className="flex justify-between mb-5">
        <div className="font-bold flex gap-2 text-lg">
          <img width={25} src="./frontoftitle.png" alt="Title Icon" />
          {props.title}
        </div>
        <ButtonRoute
          title="Бүгдийг харах →"
          route={props.router}
          text="green"
        />
      </div>
      <div className="grid grid-cols-4 gap-10">
        {Array.isArray(foods) && foods.length > 0 ? (
          foods.map((item) => (
            <div
              className="flex flex-col cursor-pointer"
              key={item._id} // Ensure each item has a unique id
              onClick={() => handleFoodClick(item)}
            >
              <img
                className="h-[300px] w-[500px] rounded-2xl"
                src={item.image}
                alt={item.name}
              />
              <p className="font-semibold text-lg">{item.name}</p>
              <p className="text-green-500 font-semibold">{item.price}₮</p>
            </div>
          ))
        ) : (
          <div className="flex gap-10">
            {skeletonArray.map((_, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="skeleton h-[300px] w-full"></div>
                <div className="skeleton h-4 w-20"></div>
                <div className="skeleton h-4 w-20"></div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedFood && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <div className="grid grid-cols-2 gap-10">
              <img
                className="w-[600] rounded-2xl"
                src={selectedFood.image}
                alt={selectedFood.name}
              />
              <div className="flex flex-col justify-between py-20">
                <button
                  onClick={handleCloseModal}
                  className="absolute top-2 right-2 text-black font-bold text-2xl"
                >
                  ×
                </button>
                <div>
                  <p className="text-4xl font-semibold mb-2">
                    {selectedFood.name}
                  </p>
                  <p className="text-lg font-bold text-green-500">
                    {selectedFood.price}₮
                  </p>
                </div>
                <div className="flex flex-col gap-2 ">
                  <p className="font-semibold text-xl">Орц:</p>
                  <p className="bg-slate-200 text-lg text-slate-500 rounded-xl px-1">
                    {selectedFood.ingredient}
                  </p>
                </div>
                <div className="flex flex-col gap-5 ">
                  <div className="font-semibold text-xl">Тоо:</div>
                  <div className="flex justify-between items-center">
                    <button
                      onClick={decrease}
                      className="text-xl text-white bg-green-500 px-5 py-2 rounded-2xl"
                    >
                      -
                    </button>
                    <p className="text-2xl">{number}</p>
                    <button
                      onClick={increase}
                      className="text-xl text-white bg-green-500 px-5 py-2 rounded-2xl"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button className="w-full bg-green-500 py-2 text-white rounded-lg">
                  Сагслах
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
