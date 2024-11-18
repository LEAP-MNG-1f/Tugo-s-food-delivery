export const Header = () => {
  return (
    <div className="grid grid-cols-2 items-center">
      <div className="flex items-center gap-10">
        <img width={40} src="./pineconeLogo.png" alt="" />
        <div className="font-semibold text-center">НҮҮР</div>
        <div className="font-semibold text-center">ХООЛНЫ ЦЭС</div>
        <div className="font-semibold text-center">ХҮРГЭЛТИЙН БҮС</div>
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
