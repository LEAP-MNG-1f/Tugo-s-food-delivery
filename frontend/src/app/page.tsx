"use client";

import { useEffect, useState } from "react";
import { HomeNuurZurag } from "./components/homepage/HomeNuurZurag";
import { BusinessInfo } from "./components/homepage/BusinessInfo";
import { MainProductComp } from "./components/homepage/SaleProduct";

export default function Home() {
  const [tuuguu, setTuuguu] = useState("");

  const fetchdata = async () => {
    try {
      const response = await fetch(`https://tugo-s-food-delivery.onrender.com`);
      const data = await response.json();
      setTuuguu(data);
      console.log(data);
    } catch (error) {
      throw new Error();
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <main className="">
      <HomeNuurZurag />
      <BusinessInfo />
      <div className="flex flex-col gap-10 py-10">
        <MainProductComp title="Хямдралтай" router="sale-products" />
        <MainProductComp title="Үндсэн хоол" router="menu" />
        <MainProductComp title="Салад ба зууш" router="menu" />
        <MainProductComp title="Амттан" router="menu" />
      </div>

      <div>{tuuguu}</div>
    </main>
  );
}
