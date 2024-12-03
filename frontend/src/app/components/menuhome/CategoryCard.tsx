"use client";
import { useEffect, useState } from "react";

type CategoryProps = {
  catName: string;
  onClick: () => void;
};

const Category = (props: CategoryProps) => {
  return (
    <button
      onClick={props.onClick}
      className="flex justify-center items-center py-2 hover:bg-green-600 w-full rounded-xl border-2 hover:text-white"
    >
      <p className="text-xl gap-2">{props.catName}</p>
    </button>
  );
};
export default Category;
