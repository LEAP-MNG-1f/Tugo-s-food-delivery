export const HomeNuurZurag = () => {
  return (
    <div
      className="bg-green-600 h-[800px] grid grid-cols-2"
      style={{
        backgroundImage: "url(/background.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-center items-center text-white">
        <div className="flex flex-col">
          <div className="text-6xl font-semibold pb-5">
            Pinecone <br /> Food delivery
          </div>
          <div className="text-2xl border-t-[1px] pt-5">
            Ходоодоо бүү өлсөг <br />
            хүссэнээ захиалаад ав.
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img width={700} src="./doubleFood.png" alt="" />
      </div>
    </div>
  );
};
