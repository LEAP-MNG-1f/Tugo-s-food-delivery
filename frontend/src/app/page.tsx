import { HomeNuurZurag } from "./components/homepage/HomeNuurZurag";
import { BusinessInfo } from "./components/homepage/BusinessInfo";
import { Food } from "./components/homepage/MainFoods";

export default function Home() {
  return (
    <main className="">
      <HomeNuurZurag />
      <BusinessInfo />
      <div className="flex flex-col gap-10 py-10">
        <Food title="Pizza" router="menu" category="674ecef31b8cb31c6d5677ce" />
        <Food
          title="Burger"
          router="menu"
          category="674ec5e46ec8968c3373621b"
        />
      </div>
    </main>
  );
}
