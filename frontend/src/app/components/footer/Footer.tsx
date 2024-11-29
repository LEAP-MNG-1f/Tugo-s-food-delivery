import { Button } from "../Button";

export const Footer = () => {
  return (
    <div
      className="flex flex-col bg-green-600 h-[550px] text-white "
      style={{
        backgroundImage: "url(/background.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center justify-center mt-[100px] gap-10 z-10">
        <div className="flex items-center gap-3">
          <img width={50} src="./pineconeLogoWhite.png" alt="" />
          <div className=" font-bold text-2xl">Food Delivery</div>
        </div>
        <div className="flex justify-between w-full px-[100px] text-xl">
          <Button title="Нүүр" route="/" />
          <Button title="Холбоо барих" route="contact-us" />
          <Button title="Хоолны цэс" route="menu" />
          <Button title="Үйлчилгээний нөхцөл" route="agreement" />
          <Button title="Хүргэлтийн бүс" route="service-area" />
          <Button title="Нууцлалын бодлого" route="privacy" />
        </div>
        <div className="flex gap-5">
          <img width={40} src="./facebook.png" alt="" />
          <img width={40} src="./instagram.png" alt="" />
          <img width={40} src="./twitter.png" alt="" />
        </div>
        <div className="text-center border-t-2 pt-10">
          © 2024 Pinecone Foods LLC <br />
          Зохиогчийн эрх хуулиар хамгаалагдсан.
        </div>
      </div>
    </div>
  );
};
