"use client";
import Link from "next/link";

type TitleandRoute = {
  title: string;
  route: string;
};

export const Button = (props: TitleandRoute) => {
  return (
    <Link href={`/${props.route}`}>
      <button className="text-green-500">{props.title}</button>
    </Link>
  );
};
