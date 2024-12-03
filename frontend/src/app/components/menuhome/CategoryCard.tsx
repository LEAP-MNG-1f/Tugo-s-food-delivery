type categoryName = {
  catName: string;
};

export const Category = (props: categoryName) => {
  return (
    <button className="flex justify-center items-center py-2 hover:bg-green-600 w-full rounded-xl border-2 hover:text-white">
      <p className=" text-xl">{props.catName}</p>
    </button>
  );
};
