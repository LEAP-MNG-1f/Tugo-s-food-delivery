"use client";
import Link from "next/link";

type TitleandRoute = {
  title: string;
  route?: string;
  text?: "green";
};

export const ButtonRoute = (props: TitleandRoute) => {
  return (
    <Link href={`/${props.route}`}>
      <button style={{ color: props.text }}>{props.title}</button>
    </Link>
  );
};
