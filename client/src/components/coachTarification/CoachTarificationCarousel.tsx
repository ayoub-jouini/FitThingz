interface Props {
  id: number;
  title: string;
  description: string;
  duration: string;
  price: number;
  promo: string;
  tarification: number;
  handleNextTarification: () => void;
  handlePreviousTarification: () => void;
}

const CoachTarificationCarousel: React.FC<Props> = (props) => {
  const {
    id,
    title,
    description,
    duration,
    price,
    promo,
    tarification,
    handleNextTarification,
    handlePreviousTarification,
  } = props;

  return (
    <div
      className={`flex-col items-center justify-between h-full  w-full ${
        tarification === id ? "flex" : "hidden"
      }`}
    >
      <div className="flex justify-between items-center">
        <div
          className="w-8 h-8 shadow rounded-full flex justify-center items-center mx-2"
          onClick={handlePreviousTarification}
        >
          <img alt="" src="/icons/arrow.svg" />
        </div>
        <p className="text-textPrimary text-base mx-4">{title}</p>
        <div
          className="w-8 h-8 shadow rounded-full flex justify-center items-center mx-2"
          onClick={handleNextTarification}
        >
          <img alt="" src="/icons/arrow.svg" className="rotate-180	" />
        </div>
      </div>
      <div className="text-grixSecondary text-sm my-3">{description}</div>
      <div className="grid grid-cols-2 w-full">
        <div className="flex">
          <p className="text-l text-primary font-medium">Duration : </p>
          <p className="text-l text-grixSecondary mx-2"> {duration}</p>
        </div>
        <div className="flex">
          <p className="text-l text-primary font-medium">Price : </p>
          <p className="text-l text-grixSecondary mx-2"> {price} Dt</p>
        </div>
        <div className="flex">
          <p className="text-l text-primary font-medium">Promo : </p>
          <p className="text-l text-grixSecondary mx-2"> {promo}</p>
        </div>
      </div>
    </div>
  );
};

export default CoachTarificationCarousel;
