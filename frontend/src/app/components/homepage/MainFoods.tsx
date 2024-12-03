"use client";
import { useEffect, useState } from "react";
import { ButtonRoute } from "../ButtonRoute";
import { BurgerCard, Card, PizzaCard } from "../Card";

type ProductProps = {
  title: string;
  router: string;
};

export const Burger = (props: ProductProps) => {
  return (
    <div className="px-[100px]">
      <div className="flex justify-between mb-5">
        <div className="font-bold flex gap-2 text-lg">
          <img width={25} src="./frontoftitle.png" alt="" />
          {props.title}
        </div>
        <ButtonRoute
          title="Бүгдийг харах →"
          route={props.router}
          text="green"
        />
      </div>
      <div>
        <BurgerCard />
      </div>
    </div>
  );
};

type PizzaProps = {
  title: string;
  router: string;
};

export const Pizza = (props: PizzaProps) => {
  return (
    <div className="px-[100px]">
      <div className="flex justify-between mb-5">
        <div className="font-bold flex gap-2 text-lg">
          <img width={25} src="./frontoftitle.png" alt="" />
          {props.title}
        </div>
        <ButtonRoute
          title="Бүгдийг харах →"
          route={props.router}
          text="green"
        />
      </div>
      <div>
        <PizzaCard />
      </div>
    </div>
  );
};
