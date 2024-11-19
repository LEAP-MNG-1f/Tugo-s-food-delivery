import { Button } from "../Button";
import { Card } from "../Card";

export const SaleProduct = () => {
  return (
    <div className="px-[100px]">
      <div className="flex justify-between mb-5">
        <div className="font-bold flex gap-2 text-lg">
          <img width={25} src="./frontoftitle.png" alt="" />
          Хямдралтай
        </div>
        <Button title="Бүгдийг харах →" route="sale-products" />
      </div>
      <div className="flex gap-10">
        <Card img="./product.png" title="Tsuivan" price={15000} discount={50} />
        <Card img="./product.png" title="Tsuivan" price={15000} discount={50} />
        <Card img="./product.png" title="Tsuivan" price={15000} discount={50} />
        <Card img="./product.png" title="Tsuivan" price={15000} discount={50} />
      </div>
    </div>
  );
};
