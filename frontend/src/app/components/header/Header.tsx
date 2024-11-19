import { Button } from "../Button";

export const Header = () => {
  return (
    <div className="grid grid-cols-2 items-center py-4">
      <div className="flex items-center gap-10">
        <img width={40} src="./pineconeLogo.png" alt="" />
        <div className="font-semibold text-center">
          <Button title="НҮҮР" route="" />
        </div>
        <div className="font-semibold text-center">
          <Button title="ХООЛНЫ ЦЭС" route="menu" />
        </div>
        <div className="font-semibold text-center">
          <Button title="ХҮРГЭЛТИЙН БҮС" route="service-area" />
        </div>
      </div>
      <div className="flex justify-end items-center gap-10">
        <div className="flex bg-slate-200 py-1 px-5 gap-3 rounded-md items-center border-black border-[1px]">
          <img width={15} src="searchIcon.png" alt="" />
          <input
            className="bg-slate-200 font-semibold"
            placeholder="Хайх"
            type="search"
            name=""
            id=""
          />
        </div>

        <div className="flex items-center gap-2">
          <img width={30} src="./cartpic.png" alt="" />
          <div className="font-semibold text-center">Сагс</div>
        </div>
        <div className="flex items-center gap-2">
          <img width={30} src="usericon.png" alt="" />
          <div className="font-semibold text-center">Нэвтрэх</div>
        </div>
      </div>
    </div>
  );
};
