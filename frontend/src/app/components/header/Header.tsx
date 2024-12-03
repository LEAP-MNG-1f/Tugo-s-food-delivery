"use client";

import Drawer from "@mui/material/Drawer";

import { ButtonRoute } from "../ButtonRoute";
import { useState, KeyboardEvent, MouseEvent } from "react";
import { CartProduct } from "../CartProduct";

type Anchor = "right";

export const Header = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      setState({ ...state, [anchor]: open });
    };

  return (
    <div className="grid grid-cols-2 items-center py-4">
      {/* Left side of the header */}
      <div className="flex items-center gap-10">
        <img width={40} src="./pineconeLogo.png" alt="Pinecone Logo" />
        <div className="font-semibold text-center">
          <ButtonRoute title="НҮҮР" route="" />
        </div>
        <div className="font-semibold text-center">
          <ButtonRoute title="ХООЛНЫ ЦЭС" route="menu" />
        </div>
        <div className="font-semibold text-center">
          <ButtonRoute title="ХҮРГЭЛТИЙН БҮС" route="service-area" />
        </div>
      </div>

      {/* Right side of the header */}
      <div className="flex justify-end items-center gap-10">
        {/* Search bar */}
        <div className="flex bg-slate-200 py-1 px-5 gap-3 rounded-md items-center border-black border-[1px]">
          <img width={15} src="searchIcon.png" alt="Search icon" />
          <input
            className="bg-slate-200 font-semibold"
            placeholder="Хайх"
            type="search"
            id="search-input"
          />
        </div>

        {/* Cart button with drawer */}
        <div className="flex items-center gap-2">
          {(["right"] as const).map((anchor) => (
            <div className="flex items-center gap-2" key={anchor}>
              <button
                className="flex items-center gap-2"
                onClick={toggleDrawer(anchor, true)}
              >
                <img width={30} src="./cartpic.png" alt="Cart icon" />
                <div className="font-semibold text-center">Сагс</div>
              </button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <header className="font-semibold text-center text-2xl py-5 border-b-2 border-black">
                      Таны сагс
                    </header>
                    <CartProduct
                      img="./chicken.png"
                      title="Tsuivan"
                      price={15000}
                      ingredient="tums, luuvan, songino, perts, davs, chinjuu"
                    />
                  </div>
                  <footer className="flex justify-between px-10 pb-5">
                    <div>
                      <div>Нийт төлөх дүн: </div>
                      <div className="font-bold">15'000₮</div>
                    </div>
                    <button className="bg-green-500 px-5 rounded-xl text-white">
                      Захиалах
                    </button>
                  </footer>
                </div>
              </Drawer>
            </div>
          ))}
        </div>

        {/* User icon */}
        <div className="flex items-center gap-2">
          <img width={30} src="usericon.png" alt="User icon" />
          <div className="font-semibold text-center">Нэвтрэх</div>
        </div>
      </div>
    </div>
  );
};
