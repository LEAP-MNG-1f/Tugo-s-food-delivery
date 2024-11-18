"use client";

import { useEffect, useState } from "react";
import { Card } from "./components/header/Card";

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
      <div>
        <Card img="Zurag" title="Hool" price={5000} discount={20} />
        <Card img="Zurag" title="Hool" price={10000} />
      </div>
      <div>{tuuguu}</div>
    </main>
  );
}
