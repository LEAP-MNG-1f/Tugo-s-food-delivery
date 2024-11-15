"use client";

import { useEffect, useState } from "react";
import { Header } from "./components/header/Header";

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
    <div>
      <div>
        <Header />
      </div>
      <div>{tuuguu}</div>
    </div>
  );
}
