"use client";
import { useEffect, useState } from "react";

type CardPropsTypezaay = {
  img: string;
  title: string;
  price: number;
  discount?: string;
  // color?: "red" | "black";
};

export const Card = (props: CardPropsTypezaay) => {
  return (
    <div>
      <div className="absolute pl-6 pt-5">
        <div className="bg-green-600 px-2 text-white border-2 rounded-2xl">
          {props.discount}
        </div>
      </div>
      <img className="" height={100} src={props.img} alt="" />
      <p className="font-semibold text-lg">{props.title}</p>
      <p className="text-green-500 font-semibold">{props.price}₮</p>
      {/* <p style={{ backgroundColor: props.color == "red" ? "black" : "red" }}>
        {props.discount}
      </p> */}
    </div>
  );
};

export const PizzaCard = () => {
  const [pizza, setpizza] = useState("");
  const skeletonArray = new Array(4).fill(null);

  const fetchdata = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/food/pizzas`);
      const data = await response.json();

      setpizza(data.data); // Set only the array part of the response
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="flex gap-10">
      {Array.isArray(pizza) ? (
        pizza.map((item, index) => (
          <div className="flex flex-col" key={index}>
            <img
              className="h-[300] w-[500] rounded-2xl"
              height={100}
              src={item.image}
              alt=""
            />
            <p className="font-semibold text-lg">{item.name}</p>
            <p className="text-green-500 font-semibold">{item.price}₮</p>
          </div>
        ))
      ) : (
        <div className="flex gap-10">
          {skeletonArray.map((_, index) => (
            <div key={index} className="flex w-[470] flex-col gap-4">
              <div className="skeleton h-[300] w-full"></div>
              <div className="skeleton h-4 w-20"></div>
              <div className="skeleton h-4 w-20"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const BurgerCard = () => {
  const [burger, setburger] = useState("");
  const skeletonArray = new Array(4).fill(null);

  const fetchdata = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/food/burgers`);
      const data = await response.json();

      setburger(data.data); // Set only the array part of the response
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="flex gap-10">
      {Array.isArray(burger) ? (
        burger.map((item, index) => (
          <div className="flex flex-col" key={index}>
            <img
              className="h-[300] w-[500] rounded-2xl"
              height={100}
              src={item.image}
              alt=""
            />
            <p className="font-semibold text-lg">{item.name}</p>
            <p className="text-green-500 font-semibold">{item.price}₮</p>
          </div>
        ))
      ) : (
        <div className="flex gap-10">
          {skeletonArray.map((_, index) => (
            <div key={index} className="flex w-[470] flex-col gap-4">
              <div className="skeleton h-[300] w-full"></div>
              <div className="skeleton h-4 w-20"></div>
              <div className="skeleton h-4 w-20"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
