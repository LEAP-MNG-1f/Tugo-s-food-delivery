import { Button } from "../Button";
import { Card } from "../Card";

type ProductProps = {
  title: string;
  router: string;
};

export const MainProductComp = (props: ProductProps) => {
  return (
    <div className="px-[100px]">
      <div className="flex justify-between mb-5">
        <div className="font-bold flex gap-2 text-lg">
          <img width={25} src="./frontoftitle.png" alt="" />
          {props.title}
        </div>
        <Button title="Бүгдийг харах →" route={props.router} text="green" />
      </div>
      <div className="flex gap-10">
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
