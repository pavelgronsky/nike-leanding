import { IImgUrl } from "../types/type";

interface IShoeCardProp {
  imgUrl: IImgUrl;
  changeBigShoeImage: (bigShoe: string) => void;
  bigShoeImage: string;
}

const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImage }: IShoeCardProp) => {
  const handleClick = () => {
    if (bigShoeImage !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe);
    }
  };

  return (
    <div
      className={`rounded-xl border-2
    ${bigShoeImage === imgUrl.bigShoe ? "border-coral-red" : "border-transparent"} cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="mx-sm:p-4 flex items-center justify-center rounded-xl bg-card bg-cover bg-center sm:h-40  sm:w-40">
        <img src={imgUrl.thumbnail} alt="shoe collection" width={127} height={103} />
      </div>
    </div>
  );
};

export default ShoeCard;
