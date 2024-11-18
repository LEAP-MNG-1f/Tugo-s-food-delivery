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
      <div
        className="bg-green-600 h-[800px] grid grid-cols-2"
        style={{
          backgroundImage: "url(/background.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-center items-center text-white">
          <div className="flex flex-col">
            <div className="text-6xl font-semibold pb-5">
              Pinecone <br /> Food delivery
            </div>
            <div className="text-2xl border-t-[1px] pt-5">
              Ходоодоо бүү өлсөг <br />
              хүссэнээ захиалаад ав.
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img width={700} src="./doubleFood.png" alt="" />
        </div>
      </div>
      <div>{tuuguu}</div>
    </main>
  );
}
