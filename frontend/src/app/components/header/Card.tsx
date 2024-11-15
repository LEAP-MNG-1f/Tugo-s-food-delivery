type CardPropsTypezaay = {
  img: string;
  title: string;
  price: number;
  discount?: number;
  color?: "red" | "black";
};

export const Card = (props: CardPropsTypezaay) => {
  return (
    <div>
      <div>{props.img}</div>
      <p>{props.title}</p>
      <p>{props.price}</p>
      <p style={{ backgroundColor: props.color == "red" ? "black" : "red" }}>
        {props.discount}
      </p>
    </div>
  );
};
