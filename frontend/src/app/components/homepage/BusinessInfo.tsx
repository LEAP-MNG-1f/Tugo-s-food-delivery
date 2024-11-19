export const BusinessInfo = () => {
  return (
    <div className="flex justify-between gap-10 px-[100px] my-20">
      <div className="flex flex-col justify-between rounded-xl shadow-xl border-2 w-full gap-5 p-5">
        <img width={50} src="./nom.png" alt="" />
        <div>
          <div className="font-bold">Хүргэлтийн төлөв хянах</div>
          <div className="text-slate-600">Захиалга бэлтгэлийн явцыг хянах</div>
        </div>
      </div>
      <div className="flex flex-col justify-between rounded-xl shadow-xl border-2 w-full gap-5 p-5">
        <img width={50} src="./clock.png" alt="" />
        <div>
          <div className="font-bold">Шуурхай хүргэлт</div>
          <div className="text-slate-600">Захиалга бэлтгэлийн явцыг хянах</div>
        </div>
      </div>
      <div className="flex flex-col justify-between rounded-xl shadow-xl border-2 w-full gap-5 p-5">
        <img width={50} src="./food.png" alt="" />
        <div>
          <div className="font-bold">Эрүүл, баталгаат орц</div>
          <div className="text-slate-600">Захиалга бэлтгэлийн явцыг хянах</div>
        </div>
      </div>
      <div className="flex flex-col justify-between rounded-xl shadow-xl border-2 w-full gap-5 p-5">
        <img width={50} src="./nom.png" alt="" />
        <div>
          <div className="font-bold">Хоолны өргөн сонголт</div>
          <div className="text-slate-600">Захиалга бэлтгэлийн явцыг хянах</div>
        </div>
      </div>
    </div>
  );
};
