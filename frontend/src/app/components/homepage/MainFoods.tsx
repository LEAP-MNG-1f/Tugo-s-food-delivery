import { ButtonRoute } from "../ButtonRoute";
import { FoodCard } from "../Card";

type PizzaProps = {
  title: string;
  router: string;
};

export const Food = (props: PizzaProps) => {
  return (
    <div className="px-[100px]">
      <div className="flex justify-between mb-5">
        <div className="font-bold flex gap-2 text-lg">
          <img width={25} src="./frontoftitle.png" alt="" />
          {props.title}
        </div>
        <ButtonRoute
          title="Бүгдийг харах →"
          route={props.router}
          text="green"
        />
      </div>
      <div>
        <FoodCard />
      </div>
    </div>
  );
};
