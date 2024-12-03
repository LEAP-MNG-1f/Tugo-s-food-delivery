type CategoryProps = {
  catName: string;
  onClick: () => void; // Add the onClick prop
};

export const Category = (props: CategoryProps) => {
  return (
    <button
      onClick={props.onClick} // Add the onClick handler
      className="flex justify-center items-center py-2 hover:bg-green-600 w-full rounded-xl border-2 hover:text-white"
    >
      <p className="text-xl">{props.catName}</p>
    </button>
  );
};
