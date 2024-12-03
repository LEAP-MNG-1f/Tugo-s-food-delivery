import { HomeNuurZurag } from "./components/homepage/HomeNuurZurag";
import { BusinessInfo } from "./components/homepage/BusinessInfo";
import { Food } from "./components/homepage/MainFoods";

export default function Home() {
  return (
    <main className="">
      <HomeNuurZurag />
      <BusinessInfo />
      <div className="flex flex-col gap-10 py-10">
        <Food title="Pizza" router="menu" />
        <Food title="Burger" router="menu" />
      </div>
    </main>
  );
}
