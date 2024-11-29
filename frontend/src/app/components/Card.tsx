type CardPropsTypezaay = {
  img: string;
  title: string;
  price: number;
  discount?: string;
  // color?: "red" | "black";
};

export const Card = (props: CardPropsTypezaay) => {
  return (
    <div>
      <div className="absolute pl-6 pt-5">
        <div className="bg-green-600 px-2 text-white border-2 rounded-2xl">
          {props.discount}
        </div>
      </div>
      <img className="" height={100} src={props.img} alt="" />
      <p className="font-semibold text-lg">{props.title}</p>
      <p className="text-green-500 font-semibold">{props.price}₮</p>
      {/* <p style={{ backgroundColor: props.color == "red" ? "black" : "red" }}>
        {props.discount}
      </p> */}
    </div>
  );
};
