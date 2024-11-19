"use client";

import { useEffect, useState } from "react";
import { HomeNuurZurag } from "./components/homepage/HomeNuurZurag";
import { BusinessInfo } from "./components/homepage/BusinessInfo";
import { SaleProduct } from "./components/homepage/SaleProduct";

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
      <SaleProduct />
      <div>{tuuguu}</div>
    </main>
  );
}
