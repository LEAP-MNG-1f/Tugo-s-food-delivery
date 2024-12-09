"use client";
import { useEffect, useState } from "react";

type FoodCardProps = {
  foods?: any[]; // Accepts an array of food items
};

export const FoodCard = ({ foods }: FoodCardProps) => {
  const [selectedFood, setSelectedFood] = useState<any | null>(null);
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

  // Handler to set the selected Food
  const handleFoodClick = (foodItem: any) => {
    setSelectedFood(foodItem);
  };

  // Handler to close the modal
  const handleCloseModal = () => {
    setSelectedFood(null);
  };

  return (
    <div className="grid grid-cols-4 gap-10 py-10">
      {Array.isArray(foods) && foods.length > 0 ? (
        foods.map((item, index) => (
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

      {/* Modal/Overlay to display the selected Food */}
      {selectedFood && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="w-[1200px] h-[600px] bg-white p-6 rounded-lg shadow-lg relative">
            <div className="grid grid-cols-2 gap-10">
              <img
                className="w-[600] rounded-2xl"
                src={selectedFood.image}
                alt={selectedFood.name}
              />
              <div className="flex flex-col justify-between py-20">
                <button
                  onClick={handleCloseModal}
                  className="absolute top-5 right-5 text-black font-bold text-2xl"
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
