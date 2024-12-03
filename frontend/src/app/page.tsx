import { HomeNuurZurag } from "./components/homepage/HomeNuurZurag";
import { BusinessInfo } from "./components/homepage/BusinessInfo";
import { Burger, Pizza } from "./components/homepage/MainFoods";

export default function Home() {
  return (
    <main className="">
      <HomeNuurZurag />
      <BusinessInfo />
      <div className="flex flex-col gap-10 py-10">
        <Burger title="Burger" router="menu" />
        <Pizza title="Pizza" router="menu" />
      </div>
    </main>
  );
}
