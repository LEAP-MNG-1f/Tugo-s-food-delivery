import { Card } from "../Card";
import { Category } from "./CategoryCard";

export const MenuPage = () => {
  return (
    <div className="px-[100px]">
      <div className="py-10">
        <div className="flex justify-between gap-20">
          <Category catName="1-р хоол" />
          <Category catName="2-р хоол" />
          <Category catName="Өглөөний цай" />
          <Category catName="Амттан" />
        </div>
      </div>
      <div className="flex gap-10 py-10">
        <Card
          img="./product.png"
          title="Tsuivan"
          price={15000}
          discount="50%"
        />
        <Card
          img="./product.png"
          title="Tsuivan"
          price={15000}
          discount="50%"
        />
        <Card
          img="./product.png"
          title="Tsuivan"
          price={15000}
          discount="50%"
        />
        <Card
          img="./product.png"
          title="Tsuivan"
          price={15000}
          discount="50%"
        />
        <Card
          img="./product.png"
          title="Tsuivan"
          price={15000}
          discount="50%"
        />
      </div>
    </div>
  );
};
