"use client";
import { useState } from "react";

type CartProduct = {
  title: string;
  img: string;
  discount?: string;
  price: number;
  ingredient: string;
};

export const CartProduct = (props: CartProduct) => {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };

  // Function to decrease the number, ensuring it doesn't go below 0
  const decrease = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };
  return (
    <div>
      <div className="grid grid-cols-2 gap-5 py-5 px-5">
        <div className="">
          <img className="rounded-2xl" width={300} src={props.img} alt="" />
        </div>
        <div className="flex flex-col justify-between w-[300px]">
          <div className="grid grid-cols-2">
            <div>
              <p className="font-semibold text-lg">{props.title}</p>
              <div className="bg-green-600 px-2 text-white rounded-2xl">
                {props.discount}
              </div>
              <p className="text-green-500 text-xl font-semibold">
                {props.price}₮
              </p>
            </div>
            <div className="text-2xl flex justify-end pr-[10px]">X</div>
          </div>
          <div className="flex gap-2">
            <p className="font-semibold">Орц найрлага: </p> {props.ingredient}
          </div>
          <div className="flex gap-5 items-center">
            <button
              onClick={decrease}
              className="text-3xl text-white bg-green-500 px-5 py-2 rounded-2xl"
            >
              -
            </button>
            <p className="text-2xl">{number}</p>
            <button
              onClick={increase}
              className="text-3xl text-white bg-green-500 px-5 py-2 rounded-2xl"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
