import { Button } from "../Button";
import { Card } from "../Card";

export const Desert = () => {
  return (
    <div className="px-[100px]">
      <div className="flex justify-between mb-5">
        <div className="font-bold flex gap-2 text-lg">
          <img width={25} src="./frontoftitle.png" alt="" />
          Амттан
        </div>
        <Button title="Бүгдийг харах →" route="menu" text="green" />
      </div>
      <div className="flex gap-10">
        <Card img="./product.png" title="Tsuivan" price={15000} />
        <Card img="./product.png" title="Tsuivan" price={15000} />
        <Card img="./product.png" title="Tsuivan" price={15000} />
        <Card img="./product.png" title="Tsuivan" price={15000} />
      </div>
    </div>
  );
};
